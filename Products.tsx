export function TikTokLogo({ size = 120 }: { size?: number }) {
  return (
    <div className="relative inline-block animate-float" style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 256 256"
        className="absolute inset-0"
        style={{ filter: "drop-shadow(0 0 30px oklch(0.65 0.27 0 / 0.6))" }}
      >
        <path
          fill="oklch(0.65 0.27 0)"
          d="M168 24c0 26 22 48 48 48v32c-18 0-35-6-48-15v68c0 35-28 63-63 63s-63-28-63-63 28-63 63-63v32c-17 0-31 14-31 31s14 31 31 31 31-14 31-31V24h32z"
          transform="translate(-6 6)"
        />
        <path
          fill="oklch(0.83 0.16 200)"
          d="M168 24c0 26 22 48 48 48v32c-18 0-35-6-48-15v68c0 35-28 63-63 63s-63-28-63-63 28-63 63-63v32c-17 0-31 14-31 31s14 31 31 31 31-14 31-31V24h32z"
          transform="translate(6 -6)"
        />
        <path
          fill="white"
          d="M168 24c0 26 22 48 48 48v32c-18 0-35-6-48-15v68c0 35-28 63-63 63s-63-28-63-63 28-63 63-63v32c-17 0-31 14-31 31s14 31 31 31 31-14 31-31V24h32z"
        />
      </svg>
    </div>
  );
}
