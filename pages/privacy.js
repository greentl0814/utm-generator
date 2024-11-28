import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>개인정보처리방침 - UTM 생성기</title>
        <meta name="robots" content="noindex" /> {/* 검색엔진에 노출되지 않도록 설정 */}
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-65TMBKVV6G" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-65TMBKVV6G');
        `}
      </Script>
      <div className="p-8 max-w-4xl mx-auto">
        <Link href="/" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">
          ← 메인으로 돌아가기
        </Link>
        <h1 className="text-2xl font-bold mb-6">개인정보처리방침</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. 개인정보의 처리 목적</h2>
            <p className="text-gray-600">
              UTM 생성기는 다음의 목적을 위해 개인정보를 처리합니다. 처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다.
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>웹사이트 이용 통계 및 분석</li>
              <li>광고 게재 및 최적화</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. 개인정보의 처리 및 보유 기간</h2>
            <p className="text-gray-600">
              UTM 생성기는 개인을 식별할 수 있는 정보를 수집하지 않습니다. 다만, Google Analytics와 Google AdSense를 통해 수집되는 익명의 사용자 통계 정보는 서비스 개선 및 광고 게재 목적으로 활용됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. 개인정보의 제3자 제공</h2>
            <p className="text-gray-600">
              UTM 생성기는 개인정보를 제3자에게 제공하지 않습니다. 다만, Google Analytics 및 Google AdSense 사용에 따라 구글의 개인정보 처리방침이 적용될 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. 쿠키의 사용</h2>
            <p className="text-gray-600">
              본 사이트는 Google Analytics와 Google AdSense를 사용하며, 이에 따라 쿠키가 설치될 수 있습니다. 사용자는 브라우저 설정에서 쿠키 설치를 거부할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. 개인정보의 안전성 확보 조치</h2>
            <p className="text-gray-600">
              본 사이트는 개인을 식별할 수 있는 정보를 수집하거나 저장하지 않습니다. 통계 정보는 Google의 보안 정책에 따라 안전하게 처리됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. 개인정보 보호책임자</h2>
            <p className="text-gray-600">
              개인정보 보호에 관한 문의사항이 있으시면 아래 연락처로 문의해 주시기 바랍니다.
            </p>
            <p className="text-gray-600 mt-2">
              이메일: kj0815@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. 개인정보처리방침의 변경</h2>
            <p className="text-gray-600">
              이 개인정보처리방침은 2024년 1월 1일부터 적용됩니다. 법령이나 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
