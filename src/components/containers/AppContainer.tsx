import { AutoComplete, Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import "./containers.css"
import header from "../../assets/images/header.webp"
import { FC } from "react";
import Sider from "antd/es/layout/Sider";
import { ContactList } from "../ContactList/ContactList";

interface IAppContainerProps {
    children: any
};

export const AppContainer: FC<IAppContainerProps> = ({children}) => {
    return (
        <Layout style={{background: "#F1F1F1", height: "100vh"}}>
            <img src={header}/>
            <Layout>
            <Sider width="17%" className="poke-sider">
                <ContactList />
            </Sider>
            <Content style={{background: "#F1F1F1"}}>
                {children}
            </Content>
        </Layout>
        </Layout>
    );
}
