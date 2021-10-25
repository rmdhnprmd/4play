export default function SignIn() {
  return (
    <section className="sign-in mx-auto">
      <div className="row">
        <div className="col-xxl-5 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
          <form action="">
            <div className="container mx-auto">
              <div className="pb-50">
                <a className="navbar-brand" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="94"
                    height="70"
                    fill="none"
                    viewBox="0 0 94 70"
                  >
                    <path
                      fill="#C4C4C4"
                      fillRule="evenodd"
                      d="M65.5 40.124c4-2.31 4-8.083 0-10.393L47 19.051v-4.042c0-4.619 5-7.506 9-5.196L90.5 29.73c4 2.31 4 8.083 0 10.393L56 60.042c-4 2.31-9-.577-9-5.196v-4.041l18.5-10.681z"
                      clipRule="evenodd"
                    />
                    <path
                      fill="#2B2467"
                      d="M61 29.804c4 2.31 4 8.083 0 10.392L26.5 60.115c-4 2.31-9-.578-9-5.196V15.08c0-4.618 5-7.505 9-5.196L61 29.804z"
                    />
                  </svg>
                </a>
              </div>
              <h2 className="text-4xl fw-bold color-palette-1 mb-10">
                Sign In
              </h2>
              <p className="text-lg color-palette-1 m-0">
                Masuk untuk melakukan proses top up
              </p>
              <div className="pt-50">
                <label
                  htmlFor="email"
                  className="form-label text-lg fw-medium color-palette-1 mb-10"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control rounded-pill text-lg"
                  id="email"
                  name="email"
                  aria-describedby="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="pt-30">
                <label
                  htmlFor="password"
                  className="form-label text-lg fw-medium color-palette-1 mb-10"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control rounded-pill text-lg"
                  id="password"
                  name="password"
                  aria-describedby="password"
                  placeholder="Your password"
                />
              </div>
              <div className="button-group d-flex flex-column mx-auto pt-50">
                <a
                  className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
                  href="#"
                  role="button"
                >
                  Continue to Sign In
                </a>
                <a
                  className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
                  href="#"
                  role="button"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </form>
        </div>
        <div className="col-xxl-7 col-lg-6 bg-blue text-center pt-lg-145 pb-lg-145 d-lg-block d-none">
          <img
            src="/img/Header-9.png"
            width="502"
            height="391.21"
            className="img-fluid pb-50"
            alt=""
          />
          <h2 className="text-4xl fw-bold text-white mb-30">
            Win the battle.
            <br />
            Be the Champion.
          </h2>
          <p className="text-white m-0">
            Kami menyediakan jutaan cara untuk
            <br /> membantu players menjadi
            <br />
            pemenang sejati
          </p>
        </div>
      </div>
    </section>
  );
}
