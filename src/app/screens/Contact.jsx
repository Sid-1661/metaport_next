import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Contact() {
    const { t } = useTranslation();
    return (
        <>
            <Header type="Single" />

            <div>{t("Contact")} <Link to="/"> {t("Home")}</Link> </div>

        </>
    )
}

export default Contact