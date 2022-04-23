import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>TechCrunch </span>News
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with the latest technology and startup news
      </p>
    </div>
  );
};

export default Header;
