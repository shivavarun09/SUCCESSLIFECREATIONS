import SvgIcon from '@mui/material/SvgIcon';

export default function SuccessLifeIcon() {
  return (
    <SvgIcon sx={{ height: 21, width: 120, mr: 2 }}>
      <svg
        width={120}
        height={21}
        viewBox="0 0 120 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Logo Mark: Stylized S and L Integration */}
        <path
          fill="#4876EF"
          d="M8 2C4.686 2 2 4.686 2 8v5c0 3.314 2.686 6 6 6h2V2H8Z"
          opacity={0.2}
        />
        <path
          fill="#4876EF"
          d="M11 19h-3c-2.76 0-5-2.24-5-5V8c0-2.76 2.24-5 5-5h3v2H8c-1.657 0-3 1.343-3 3v6c0 1.657 1.343 3 3 3h3v2Z"
        />
        <path
          fill="#00D3AB"
          d="M7 10c0-1.105.895-2 2-2h4v2H9v4h6v2H9c-1.105 0-2-.895-2-2v-4Z"
        />
        
        {/* Brand Name: SuccessLife */}
        <text
          x="22"
          y="13"
          fill="#4876EE"
          style={{
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
            fontSize: '12px',
          }}
        >
        Success
          <tspan fill="#B4C0D3">Life</tspan>
        </text>

        {/* Subtitle: CREATIONS */}
        <text
          x="22"
          y="19"
          fill="#B4C0D3"
          style={{
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'normal',
            fontSize: '5px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
          }}
        >
          Developers
        </text>
      </svg>
    </SvgIcon>
  );
}