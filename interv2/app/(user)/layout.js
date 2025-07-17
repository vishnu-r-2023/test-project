'use client'
import SessionWrapper from '@/app/component/SessionWrapper'

export default function UserLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
        {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
