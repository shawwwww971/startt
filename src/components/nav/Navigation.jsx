import "./Navigation.css";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space, Select } from "antd";
import franceImg from "../../icons/france.png";
import usaImg from "../../icons/usa.png";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const workflowItems = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        2nd menu item
      </a>
    ),
    icon: <SmileOutlined />,
  },
];

const enContent = (
  <div className="lang-content">
    <img src={usaImg} alt="English" className="lang-img" />
    English
  </div>
);
const frContent = (
  <div className="lang-content">
    <img src={franceImg} alt="English" className="lang-img" />
    Français
  </div>
);

export default function Navigation() {
  const { t } = useTranslation();

  function langHandle(value) {
    i18n.changeLanguage(value);
  }
  return (
    <div className="nav-bar">
      <h1>Logo</h1>
      <div className="nav-links">
        <a href="#">{t("nav_home")}</a>

        <a href="#">{t("nav_services")}</a>
        <Dropdown
          menu={{
            items: workflowItems,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              {t("nav_workflow")}
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>

        <a href="#">{t("nav_careers")}</a>
        <a href="#">{t("nav_contact")}</a>
      </div>

      <Select
        defaultValue="en"
        style={{ width: 120 }}
        onChange={langHandle}
        options={[
          {
            value: "en",
            label: enContent,
          },
          {
            value: "fr",
            label: frContent,
          },
        ]}
      />
    </div>
  );
}
