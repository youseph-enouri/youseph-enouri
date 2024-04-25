export default function EmailIcon({ className }: { className?: string }) {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M64 128h896v768H64z"
        fill="#0078D4"
      />
      <path
        d="M64 128l448 352 448-352v768H64z"
        fill="#fff"
      />
      <path
        d="M64 128l448 320v384H64z"
        fill="#f3f3f3"
      />
      <path
        d="M960 128H64l448 320z"
        fill="#28A8EA"
      />
    </svg>
  );
}
