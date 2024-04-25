import { clsx } from 'clsx';

export default function SNSIcon({
  type,
  className,
}: {
  type: string;
  className?: string;
}) {
  switch (type) {
    case 'github':
      return <SVGGitHub className={clsx(['github', className])} />;

    case 'google':
      return <SVGGoogle className={className} />;
  }
  return <>SNSIcon</>;
}

function SVGGitHub({ className }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1503_498)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.9523 4C11.1311 4 4 11.3333 4 20.4057C4 27.6577 8.56914 33.7963 14.9078 35.969C15.7002 36.1323 15.9905 35.616 15.9905 35.1817C15.9905 34.8013 15.9644 33.4977 15.9644 32.1393C11.5269 33.1173 10.6028 30.1837 10.6028 30.1837C9.88963 28.2823 8.83298 27.7937 8.83298 27.7937C7.38057 26.7887 8.93878 26.7887 8.93878 26.7887C10.5499 26.8973 11.3953 28.4727 11.3953 28.4727C12.8212 30.9713 15.119 30.2653 16.0434 29.8307C16.1753 28.7713 16.5982 28.038 17.0472 27.6307C13.5079 27.2503 9.78416 25.838 9.78416 19.5363C9.78416 17.7437 10.4176 16.277 11.4214 15.1363C11.263 14.729 10.7082 13.0447 11.5801 10.7903C11.5801 10.7903 12.927 10.3557 15.9641 12.4743C17.2644 12.1152 18.6053 11.9325 19.9523 11.931C21.2993 11.931 22.6723 12.1213 23.9402 12.4743C26.9776 10.3557 28.3246 10.7903 28.3246 10.7903C29.1964 13.0447 28.6413 14.729 28.4829 15.1363C29.5131 16.277 30.1205 17.7437 30.1205 19.5363C30.1205 25.838 26.3967 27.223 22.831 27.6307C23.4122 28.1467 23.9138 29.1243 23.9138 30.6727C23.9138 32.8727 23.8877 34.6383 23.8877 35.1813C23.8877 35.616 24.1783 36.1323 24.9705 35.9693C31.3091 33.796 35.8782 27.6577 35.8782 20.4057C35.9043 11.3333 28.7471 4 19.9523 4Z"
          fill="#24292F"
        />
      </g>
      <defs>
        <clipPath id="clip0_1503_498">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(4 4)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function SVGGoogle({ className }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M36 20.7152C36 19.639 35.9047 18.6173 35.7412 17.6229H20.3474V23.7668H29.1614C28.7663 25.7829 27.6084 27.4858 25.8919 28.6437V32.7306H31.1503C34.2291 29.8834 36 25.6876 36 20.7152Z"
        fill="#4285F4"
      />
      <path
        d="M20.3474 36.6948C24.7612 36.6948 28.4529 35.2235 31.1503 32.7306L25.8919 28.6437C24.4206 29.6246 22.5543 30.224 20.3474 30.224C16.0834 30.224 12.4734 27.3495 11.1792 23.467H5.75732V27.6765C8.44102 33.0166 13.9583 36.6948 20.3474 36.6948Z"
        fill="#34A853"
      />
      <path
        d="M11.1792 23.4671C10.8387 22.4862 10.6616 21.4373 10.6616 20.3474C10.6616 19.2576 10.8523 18.2087 11.1792 17.2278V13.0184H5.75734C4.64027 15.2253 4 17.7046 4 20.3474C4 22.9903 4.64027 25.4696 5.75734 27.6765L11.1792 23.4671Z"
        fill="#FBBC05"
      />
      <path
        d="M20.3474 10.4708C22.7586 10.4708 24.911 11.3018 26.6139 12.923L31.2729 8.26394C28.4529 5.62112 24.7612 4 20.3474 4C13.9583 4 8.44102 7.67817 5.75732 13.0183L11.1792 17.2278C12.4734 13.3453 16.0834 10.4708 20.3474 10.4708Z"
        fill="#EA4335"
      />
    </svg>
  );
}