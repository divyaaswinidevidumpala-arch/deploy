function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1 className="fade-in">Welcome to MyStore</h1>
        <p className="slide-up">Trendy styles, best deals, and more!</p>
        <button className="pulse">Start Shopping</button>
      </div>
      <div className="highlight">
        <h2>🔥 Popular Categories</h2>
        <div className="categories">
          <div className="category">👕 Fashion</div>
          <div className="category">📱 Electronics</div>
          <div className="category">💍 Jewelry</div>
        </div>
      </div>
    </div>
  );
}
export default Home;
