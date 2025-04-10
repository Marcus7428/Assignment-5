function Feature() {



  return (
    <div className="headerSection">
      <h1 class="title">WebFlicks</h1>
      <img src="movieBackground.jpg" class="background"> </img>
      <h1 class="heroText">Rent all of the latest and greatest shows starting from $0.99!</h1>
      <div class="navBar"></div>
      <button class="signInButton">Sign in</button>
      <button class="signUpButton">Sign up</button>
      <select class="LanguageDropdown">
        <option value="English">English</option>
        <option value="French">French</option>
      </select>
    </div>
  );
}

export default Feature