import { AutoComplete, Divider, List, Skeleton } from "antd";
import { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import "./contact-list.css"
import { loadMorePokemons } from "../../services/contactList_s";


interface IContactListProps {};
export const ContactList: FC<IContactListProps> = (props) => {

    const { name } = useParams();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any[]>([]); //Registrar interfaz
    const [offset, setOffset] = useState(0)

    const loadMoreData = async () => {
        if (loading) {
          return;
        }
        setLoading(true);

        await loadMorePokemons(30,offset)
        .then((_data) => {
            setLoading(false);
            setData(prevData => {
                // Si ya hay datos, combina los antiguos con los nuevos. Si no, usa solo los nuevos.
                return prevData.length > 0 ? [...prevData, ..._data.results] : _data.results;
            });
            setOffset(prevOffset => prevOffset + 30);
        })
        .catch(() => {
            setLoading(false);
        })
        
      };

      useEffect(() => {
        loadMoreData();
        console.log("PARAMS", name)
      }, []);

    return (
        <div id="scrollableDiv" className="contact-list-container">
            <AutoComplete
                options={[]}
                style={{ width: "100%" }}
                onSelect={() => {}}
                onSearch={() => {}}
                placeholder="input here"
            />
            <br/>
            <br/>
            <InfiniteScroll
                dataLength={data.length}
                next={loadMoreData}
                hasMore={data.length < 1302}
                loader={<Skeleton active />}
                endMessage={<Divider plain>Estos son todos los pokemones 🤐</Divider>}
                scrollableTarget="scrollableDiv"
            >
            <List
                dataSource={data}
                renderItem={(item) => (
                    <List.Item key={item.name}>
                    <List.Item.Meta
                        title={
                            <Link to={`/contacts/${item.name}`}>
                                {item.name}
                            </Link>
                        }
                    />
                    </List.Item>
                )}
                />
            </InfiniteScroll>
            
        </div>
    );
}
