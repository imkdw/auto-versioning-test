module.exports = {
  // 커밋 타입 설정
  types: [
    { type: "[Feat]", section: "✨ 새로운 기능" },
    { type: "[Fix]", section: "🐛 버그 수정" },
    { type: "[Docs]", section: "📝 문서" },
    { type: "[Style]", section: "💄 스타일" },
    { type: "[Refactor]", section: "♻️ 리팩토링" },
    { type: "[Perf]", section: "⚡️ 성능 개선" },
    { type: "[Test]", section: "✅ 테스트" },
    { type: "[Build]", section: "👷 빌드" },
    { type: "[CI]", section: "💫 CI/CD" },
    { type: "[Chore]", section: "🔧 기타 변경사항" },
  ],

  excludeTypes: [],

  // 버전 태그 접두사
  versionPrefix: "v",

  // 커밋 URL 형식
  commitUrlFormat: "{{host}}/{{owner}}/{{repository}}/commit/{{hash}}",

  // 이슈 URL 형식
  issueUrlFormat: "{{host}}/{{owner}}/{{repository}}/issues/{{id}}",

  // 사용자 URL 형식
  userUrlFormat: "{{host}}/{{user}}",

  // 릴리스 노트 템플릿
  releaseNoteTemplate: `
    # {{version}} ({{date}})
    {{#each types}}

    ## {{section}}
    {{#each commits}}
    * {{#if scope}}**{{scope}}:** {{/if}}{{subject}} ([{{shortHash}}]({{commitUrl}})){{#if references}} ({{#each references}}[#{{id}}]({{url}}){{/each}}){{/if}}
    {{/each}}
    {{/each}}
  `,

  // 커밋 그룹 정렬
  sortBy: "section",

  // 커밋 정렬
  sortCommits: "date",
};
