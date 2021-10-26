import Link from "next/link";

interface GameItemProps {
  title: string;
  category: string;
  thumbnail:
    | "Thumbnail-1"
    | "Thumbnail-2"
    | "Thumbnail-3"
    | "Thumbnail-4"
    | "Thumbnail-5";
  delay: "100" | "200" | "300" | "400" | "500";
}
export default function GameItem(props: GameItemProps) {
  const { title, category, thumbnail, delay } = props;

  return (
    <div
      className="featured-game-card position-relative"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <Link href="/detail">
        <a>
          <div className="blur-sharp">
            <img
              className="thumbnail"
              src={`/img/${thumbnail}.png`}
              width={205}
              height={270}
              alt="thumbnail"
            />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <img
                  src="/icon/console.svg"
                  width={54}
                  height={36}
                  alt="console"
                />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">{title}</p>
                <p className="fw-light text-white m-0">{category}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
