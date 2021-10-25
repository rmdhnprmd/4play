export default function SignUp() {
  return (
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div className="container mx-auto">
        <form action="">
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
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
          <p className="text-lg color-palette-1 m-0">
            Daftar dan bergabung dengan kami
          </p>
          <div className="pt-50">
            <label
              htmlFor="name"
              className="form-label text-lg fw-medium color-palette-1 mb-10"
            >
              Full Name
            </label>
            <input
              type="text"
              className="form-control rounded-pill text-lg"
              id="name"
              name="name"
              aria-describedby="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="pt-30">
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
              className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
              href="#"
              role="button"
            >
              Continue
            </a>
            <a
              className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
              href="#"
              role="button"
            >
              Sign In
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
