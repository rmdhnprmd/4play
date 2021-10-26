import GameItem from "../../molecules/GameItem";

export default function FeaturedGame() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4">
          <GameItem
            title="Super Mechs"
            category="Mobile"
            thumbnail="Thumbnail-1"
            delay="100"
          />
          <GameItem
            title="Call of Duty: Modern"
            category="Mobile"
            thumbnail="Thumbnail-2"
            delay="200"
          />
          <GameItem
            title="Mobile Legends"
            category="Mobile"
            thumbnail="Thumbnail-3"
            delay="300"
          />
          <GameItem
            title="Clash of Clans"
            category="Mobile"
            thumbnail="Thumbnail-4"
            delay="400"
          />
          <GameItem
            title="Valorant"
            category="Desktop"
            thumbnail="Thumbnail-5"
            delay="500"
          />
        </div>
      </div>
    </section>
  );
}
