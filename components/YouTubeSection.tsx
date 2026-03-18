import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@devlock%C3%A8";

const VIDEOS = [
  { id: "SIttpBFwQhY", label: "Featured Video 1" },
  { id: "DFbgg-_Tzmg", label: "Featured Video 2" },
  { id: "mRYEKfrxKjQ", label: "Featured Video 3" },
];

const YouTubeSection = () => {
  return (
    <SectionWrapper id="youtube">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle
          title="YOUTUBE"
          subtitle="Watch gameplay clips, development updates, and more on our YouTube channel"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {VIDEOS.map((video) => (
            <div key={video.id} className="group relative">
              <div className="absolute -inset-[1px] gradient-gold opacity-20 group-hover:opacity-30 transition-opacity blur-sm" />
              <div className="relative w-full aspect-video border-2 border-gold/30 overflow-hidden bg-background pixel-border">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  title={video.label}
                  className="w-full h-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display text-[12px] tracking-[0.2em] text-gold hover:text-gold/80 transition-colors"
          >
            VISIT OUR YOUTUBE CHANNEL
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default YouTubeSection;
