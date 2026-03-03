import "../styles/footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">© {year} MyPortfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
