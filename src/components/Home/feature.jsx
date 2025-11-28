const GuestData = [
  {
    url: "/public/pastor.jpg",
    name: "Pastor Eugene Addo",
    title: "Pastor of the Prolific Church",
    bio: "The set-man of the Productive Church, popularly known as the Prolific Church. He is a prolific pastor with deep apostolic teachings. His divine calling has been officially affirmed by his father in the faith, Apostle Elorm John Tete, a revered spiritual head of Psalmist International. This spiritual lineage lends credibility and continuity to the ministry's apostolic mandate.",
  },
  {
    url: "/public/pastor2.jpg",
    name: "Shepherd Gideon Katibor",
    title: "Shepherd",
    bio: "The leader and founder of THE JESUS REVIVAL MINISTRY. He is a Prophet and Apostolic teacher whose divine calling has been officially affirmed by Prophet Joshua Tetteh, a revered spiritual father and recognized successor to Apostle Peter Newman Anim",
  },
  {
    url: "/public/pastor3.jpg",
    name: "Christopher Yaw-Annor (Nabiy)",
    title: "Minister",
    bio: "A prophetic psalmist under the ministry of his father in the faith, Apostle Elorm J. Tete.",
  },
];

const RenderGuest = ({ url, name, title, bio }) => {
  return (
    <div className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <div className="w-full max-h-[300px]">
          <img
            src={url}
            alt={`${name}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-zinc-800 text-primary text-xl font-bold leading-tight">
          {name}
        </h3>
        <p className="text-primary dark:text-primary-400 text-sm font-medium leading-normal">
          {title}
        </p>
        <p className="text-slate-500 text-sm font-normal leading-relaxed mt-2">
          {bio}
        </p>
      </div>
    </div>
  );
};

const Feature = () => {
  return (
    <section
      class="py-20 md:py-28 bg-background-light min-h-screen "
      id="feature"
    >
      <div class="container mx-auto px-4">
        <div class="flex flex-col gap-12">
          {/* Header Section */}
          <div class="text-center max-w-3xl mx-auto">
            <h2 class="text-primary tracking-tight text-3xl md:text-4xl font-bold leading-tight">
              What to Expect
            </h2>
            <p class="text-slate-500 text-base md:text-lg font-normal leading-normal mt-4">
              Discover the key highlights of our program, designed to inspire
              and connect our community.
            </p>
          </div>

          {/* featured Guest Speakers */}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GuestData.map(({ url, name, title, bio }, index) => (
              <RenderGuest
                key={index}
                url={url}
                name={name}
                title={title}
                bio={bio}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
