const activities = [
  "Open Prayer",
  "Praises and Worship",
  "Moment of Prayer",
  "Panel Discussion",
  "Offering",
  "Song Ministration",
  "Sermon",
  "Deliverance and Prophetic session",
  "Announcements",
  "Closing Prayer",
];

const RenderSchedule = ({ index, activity }) => {
  return (
    <div class="flex items-start gap-4 sm:gap-6 p-4 bg-white rounded-xl border border-slate-500 ">
      <div class="flex flex-col items-center">
        <div class="bg-primary text-zinc font-bold rounded-lg px-4 py-1 text-sm">
          {index}
        </div>
      </div>
      <div class="flex-1">
        <h3 class="font-bold text-zinc">{activity}</h3>
      </div>
    </div>
  );
};

const Schedule = () => {
  return (
    <section class="py-20 md:py-28 bg-background-light " id="outline">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-primary  tracking-tight text-3xl md:text-4xl font-bold leading-tight">
            Program Outline
          </h2>
          <p class="text-slate-600  text-base md:text-lg font-normal leading-normal mt-4">
            Here is a simple overview of our program. Full details will be
            provided upon registration.
          </p>
        </div>

        <div class="max-w-3xl mx-auto">
          <div class="flex flex-col gap-2 sm:gap-4">
            {activities.map((activity, index) => (
              <RenderSchedule
                key={index}
                index={index + 1}
                activity={activity}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
