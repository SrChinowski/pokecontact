import { Button, Flex, Grid } from "antd";
import { FC } from "react";
import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.webp"
import pokeball from "../../assets/images/pokeball.webp"
import hero from "../../assets/images/hero.webp"
import heroMobile from "../../assets/images/hero-mobile.webp"

import "./landing.css"

interface ILandingProps {};
const { useBreakpoint } = Grid;

export const Landing: FC<ILandingProps> = (props) => {
    const { t } = useTranslation();
    const screens = useBreakpoint();

    //Si es Compu regresa un layout
    if(!screens.xs) return (
        <Flex className="landing-container" justify="space-between" align="center">
            <Flex vertical style={{marginBottom: 55}}>
                <img className="logo-img" src={logo}/>
                <h1 className="hero-text">{t('Landing.Hero')}</h1>
                <Flex align="center" gap={15}>
                    <img src={pokeball}/>
                    <p className="hero-description">{t('Landing.Description')}</p>
                </Flex>
                <Button type="primary"> 
                    <Link to={"/contacts"}>
                        {t("Landing.Btn")}
                    </Link>
                </Button>
            </Flex>
            <img className="hero-img" src={hero}/>
        </Flex>
    );
    //Si no, regresa otro layout
    else return(
        <Flex vertical>
            <img className="logo-img" src={logo}/>
            <img className="hero-img" src={heroMobile}/>
            <Flex vertical className="mobile-hero-container" justify="flex-end">
                <h1 className="hero-text">{t('Landing.Hero')}</h1>
                <p className="hero-description">{t('Landing.Description')}</p>
                <Button type="primary"> 
                    <Link to={"/contacts"}>
                        {t("Landing.Btn")}
                    </Link>
                </Button>
            </Flex>
        </Flex>
    )
}