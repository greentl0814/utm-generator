import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

export default function PlatformGuide() {
  return (
    <>
      <Head>
        <title>플랫폼별 UTM 활용 가이드 - UTM 생성기</title>
        <meta name="description" content="페이스북, 구글, 네이버 등 주요 광고 플랫폼에서 UTM 태그를 효과적으로 활용하는 방법을 알아보세요." />
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
        <h1 className="text-2xl font-bold mb-6">플랫폼별 UTM 활용 가이드</h1>
        {/* 주의사항 알림 추가 */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                본 가이드는 참고용 자료입니다. 실제 적용 시에는 각 광고 플랫폼의 최신 정책과 업데이트를 반드시 확인하시기 바랍니다.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-12">
          {/* 페이스북 & 인스타그램 섹션 */}
          <section>
            <h2 className="text-xl font-semibold mb-4 pb-2 border-b">페이스북 & 인스타그램</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg mb-2">1. 기본 UTM 구조</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">• utm_source: facebook 또는 instagram</p>
                  <p className="text-gray-700">• utm_medium: cpc, paid-social, social</p>
                  <p className="text-gray-700">• utm_campaign: 캠페인명_연월</p>
                  <p className="text-gray-700">• utm_content: 광고 소재 구분</p>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-2">2. 광고 관리자 설정 방법</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>광고 세트 생성 시 'URL 매개변수' 섹션 확인</li>
                  <li>웹사이트 URL 입력 후 '매개변수 작성' 선택</li>
                  <li>각 UTM 파라미터 입력</li>
                  <li>동적 매개변수 활용 가능 (광고 ID, 광고 세트명 등)</li>
                </ol>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-2">3. 추천 UTM 예시</h3>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <p className="text-sm font-medium mb-2">피드 광고:</p>
                  <code className="text-sm bg-gray-100 p-2 rounded block">
                    utm_source=facebook&utm_medium=paid-social&utm_campaign=summer_sale_2024&utm_content=feed_photo
                  </code>
                  <p className="text-sm font-medium mb-2 mt-4">스토리 광고:</p>
                  <code className="text-sm bg-gray-100 p-2 rounded block">
                    utm_source=instagram&utm_medium=paid-social&utm_campaign=summer_sale_2024&utm_content=story_video
                  </code>
                </div>
              </div>
            </div>
          </section>

          {/* 구글 광고 섹션 */}
          <section>
            <h2 className="text-xl font-semibold mb-4 pb-2 border-b">구글 광고</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg mb-2">1. 자동 태깅과 수동 태깅</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">자동 태깅 (추천)</h4>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>구글 애즈 계정에서 자동 태깅 활성화</li>
                    <li>gclid 파라미터 자동 추가</li>
                    <li>GA와 자동 연동</li>
                  </ul>
                  <h4 className="font-medium mb-2">수동 태깅</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>utm_source=google</li>
                    <li>utm_medium=cpc</li>
                    <li>세부 캠페인 정보 직접 설정</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-2">2. 광고 유형별 추천 설정</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">검색 광고:</p>
                    <code className="text-sm bg-gray-100 p-2 rounded block">
                      utm_source=google&utm_medium=cpc&utm_campaign=search_brand&utm_content=headline1
                    </code>
                  </div>
                  <div>
                    <p className="font-medium mb-2">디스플레이 광고:</p>
                    <code className="text-sm bg-gray-100 p-2 rounded block">
                      utm_source=google&utm_medium=display&utm_campaign=remarketing&utm_content=banner1
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 네이버 광고 섹션 */}
          <section>
            <h2 className="text-xl font-semibold mb-4 pb-2 border-b">네이버 광고</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg mb-2">1. 검색광고 UTM 설정</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">기본 구조:</p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>utm_source=naver</li>
                    <li>utm_medium=cpc</li>
                    <li>utm_campaign=brand_search</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-2">2. 광고 유형별 예시</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">일반 검색광고:</p>
                    <code className="text-sm bg-gray-100 p-2 rounded block">
                      utm_source=naver&utm_medium=cpc&utm_campaign=search_keywords&utm_content=keyword1
                    </code>
                  </div>
                  <div>
                    <p className="font-medium mb-2">브랜드검색:</p>
                    <code className="text-sm bg-gray-100 p-2 rounded block">
                      utm_source=naver&utm_medium=bs&utm_campaign=brand_search&utm_content=main
                    </code>
                  </div>
                  <div>
                    <p className="font-medium mb-2">쇼핑검색:</p>
                    <code className="text-sm bg-gray-100 p-2 rounded block">
                      utm_source=naver&utm_medium=cpc&utm_campaign=shopping&utm_content=product1
                    </code>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-2">3. 주의사항</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>네이버 광고 소재별로 utm_content 구분 권장</li>
                  <li>브랜드검색과 일반 검색광고의 medium 구분</li>
                  <li>쇼핑검색은 상품별 content 값 설정</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 pb-2 border-b">실전 활용 팁</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg mb-2">1. 명명 규칙 통일</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>모든 플랫폼에서 일관된 UTM 규칙 사용</li>
                  <li>소문자 사용 권장</li>
                  <li>띄어쓰기는 언더바(_) 사용</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-2">2. 캠페인 구조화</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">campaign 값 구조화 예시:</p>
                  <code className="text-sm bg-gray-100 p-2 rounded block mt-2">
                    [시즌]_[목적]_[타겟]_[연월]
                  </code>
                  <p className="text-gray-500 text-sm mt-2">예: summer_sale_new_202401</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="mt-8 pt-8 border-t text-center text-gray-600">
          <nav className="space-x-4">
            <Link href="/guide" className="hover:text-gray-900">
              사용 가이드
            </Link>
            <Link href="/privacy" className="hover:text-gray-900">
              개인정보처리방침
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
}
