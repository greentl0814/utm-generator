import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Guide() {
  return (
    <>
      <Head>
        <title>UTM 태그 사용 가이드 - UTM 생성기</title>
        <meta name="description" content="UTM 태그의 기본 개념부터 실제 활용 방법까지 상세히 알아보세요." />
      </Head>
      <div className="p-8 max-w-4xl mx-auto">
        <Link href="/" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">
          ← 메인으로 돌아가기
        </Link>
        <h1 className="text-2xl font-bold mb-6">UTM 태그 사용 가이드</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">UTM 태그란?</h2>
            <p className="text-gray-600 mb-4">
              UTM(Urchin Tracking Module) 태그는 웹사이트 트래픽의 출처를 추적하기 위한 URL 파라미터입니다.
              Google Analytics에서 트래픽 소스를 정확하게 파악하고 마케팅 캠페인의 효과를 측정하는 데 사용됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">UTM 파라미터 설명</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">1. utm_source (필수)</h3>
                <p className="text-gray-600">트래픽의 출처를 나타냅니다. (예: google, facebook, newsletter)</p>
                <p className="text-gray-500 text-sm mt-1">예시: utm_source=facebook</p>
              </div>
              <div>
                <h3 className="font-medium">2. utm_medium (필수)</h3>
                <p className="text-gray-600">트래픽이 유입된 매체를 나타냅니다. (예: cpc, email, social)</p>
                <p className="text-gray-500 text-sm mt-1">예시: utm_medium=cpc</p>
              </div>
              <div>
                <h3 className="font-medium">3. utm_campaign</h3>
                <p className="text-gray-600">특정 프로모션이나 캠페인을 구분합니다. (예: spring_sale)</p>
                <p className="text-gray-500 text-sm mt-1">예시: utm_campaign=spring_sale_2024</p>
              </div>
              <div>
                <h3 className="font-medium">4. utm_content</h3>
                <p className="text-gray-600">동일한 캠페인 내 광고를 구분합니다. (예: banner_top)</p>
                <p className="text-gray-500 text-sm mt-1">예시: utm_content=main_banner</p>
              </div>
              <div>
                <h3 className="font-medium">5. utm_term</h3>
                <p className="text-gray-600">유료 검색 키워드를 추적합니다.</p>
                <p className="text-gray-500 text-sm mt-1">예시: utm_term=marketing_tools</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">UTM 태그 작성 모범 사례</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>소문자만 사용하여 일관성 유지</li>
              <li>공백 대신 언더스코어(_) 사용</li>
              <li>특수문자 사용 자제</li>
              <li>간단하고 명확한 이름 사용</li>
              <li>조직 내 일관된 네이밍 규칙 수립</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">자주 사용되는 UTM 조합 예시</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">1. 페이스북 유료 광고:</p>
              <code className="text-sm bg-gray-100 p-2 rounded block">
                example.com?utm_source=facebook&utm_medium=cpc&utm_campaign=spring_sale
              </code>

              <p className="text-sm text-gray-600 mb-2 mt-4">2. 이메일 마케팅:</p>
              <code className="text-sm bg-gray-100 p-2 rounded block">
                example.com?utm_source=newsletter&utm_medium=email&utm_campaign=weekly_digest
              </code>

              <p className="text-sm text-gray-600 mb-2 mt-4">3. 블로그 포스트:</p>
              <code className="text-sm bg-gray-100 p-2 rounded block">
                example.com?utm_source=blog&utm_medium=referral&utm_campaign=guide_post
              </code>
            </div>
          </section>

        </div>

        <footer className="mt-8 pt-8 border-t text-center text-gray-600">
          <Link href="/privacy" className="hover:text-gray-900">
            개인정보처리방침
          </Link>
        </footer>
      </div>
    </>
  );
}
