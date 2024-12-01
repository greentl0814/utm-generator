import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Redirect() {
  const [countdown, setCountdown] = useState(5);
  const newUrl = 'https://mkt-box.vercel.app';

  useEffect(() => {
    // 5초 카운트다운
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // 5초 후 리다이렉트
    const redirect = setTimeout(() => {
      window.location.href = newUrl;
    }, 5000);

    // 컴포넌트 언마운트시 타이머 정리
    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, []);

  return (
    <>
      <Head>
        <title>UTM Generator - 새로운 주소로 이동합니다</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 max-w-lg">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">서비스가 이전되었습니다</h1>
            <p className="text-gray-600 mb-4">
              UTM Generator가 더 다양한 마케팅 도구와 함께<br />
              새로운 Marketing Tool Box로 통합되었습니다.
            </p>
            <div className="text-blue-600 font-medium">
              {countdown}초 후 자동으로 이동됩니다
            </div>
          </div>

            href={newUrl}
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors"
          >
            지금 바로 이동하기
          </a>
        </div>
      </div>
    </>
  );
}
