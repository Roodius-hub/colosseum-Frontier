export default function Logosvg({className = ""}) {
  return (
    <div className={`flex items-center gap-3  ${className}`}>

      {/* LOGO BLOCK */}
      <div className="relative w-24 h-20 ">

        {/* UFO (BIG + CENTERED) */}
        <svg
          viewBox="0 0 120 70"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-24"
        >
          {/* UFO body */}
          <path
            d="M10 30 Q60 5 110 30 Q60 45 10 30 Z"
            fill="white"
          />
          <ellipse cx="60" cy="20" rx="18" ry="7" fill="white" />

          {/* GRAVITY BEAM (wide, not lines) */}
          <path
            d="M40 35 Q60 50 80 35 L70 70 Q60 75 50 70 Z"
            fill="rgba(0,0,0,0.15)"
          />
        </svg>

        {/*  COLOSSEUM (PERFECTLY CENTERED UNDER BEAM) */}
        <svg
          viewBox="0 0 32 32"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10"
        >
          <path d="M26.5574 6.73698H5.78781V9.26779H26.5574V6.73698Z" fill="white"/>
          <path d="M24.5038 11.2324H7.83915V13.7632H24.5038V11.2324Z" fill="white"/>
          <path d="M17.4347 15.7284H14.9039V26.8419H17.4347V15.7284Z" fill="white"/>
          <path d="M12.3767 15.7284H9.84585V26.8419H12.3767V15.7284Z" fill="white"/>
          <path d="M22.5017 15.7284H19.9708V26.8419H22.5017V15.7284Z" fill="white"/>
        </svg>

      </div>

      {/* TEXT */}
      <span className="font-semibold text-2xl">
        Colosseum Space
      </span>

    </div>
  );
}