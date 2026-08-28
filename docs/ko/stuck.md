# Stuck Signals

시스템은 스스로 돌아가지만, 조용히 멈추기도 한다. Stuck Signal은 시스템의 특정 부분이 더 이상 전진하지 않을 때 드러나는 정체 패턴이다. OTD는 신호의 임계치와 해소 방법을 정의하고, 사용자는 Review 의식에서 이를 점검한다.

---

## 왜 Stuck Signal을 1급 개념으로 두는가

GTD가 가진 가장 큰 실패 모드는 "뭔가가 조용히 안 움직이고 있는데 아무도 모름"이다. OTD는 `Today가 비면 끝`이라는 완료 신호로 일일 수준의 전진을 가시화하지만, 일일 수준에서만으로는 부족하다. 며칠, 몇 주, 몇 달 단위로 곪는 정체는 별도의 진단 기제가 필요하다.

Stuck Signal은 **결정을 대신하지 않는다**. 원칙 2(오늘을 큐레이트하고, 삶을 설계하라)는 유지된다. 신호는 단지 결정이 필요한 지점을 피할 수 없게 드러내는 것이다. 해소 방법을 선택하는 것은 사용자다.

---

## 임계치는 기본값이지 법이 아니다

아래의 모든 숫자(3일, 7일, 2주, 1개월, 6개월)는 **출발 기본값**이고 프레임워크의 규칙이 아니다. 시스템이 너에 대해 아무것도 모르는 첫날에도 작동하기 위해 존재한다.

이 숫자들은 너의 실제 리듬으로 수렴해야 한다:

- Await가 보통 이틀에 돌아온다면, 7일 임계치는 너무 느려서 쓸모가 없다.
- 긴 연구 사이클로 일한다면, 2주 Stalled Flow 임계치는 매번 헛경보를 낸다.
- 맞는 임계치는 신호를 보고 *행동하게* 되는 값이다. 무시하게 되는 값이 아니다.

이를 정직하게 유지하는 규칙 두 개:

- **항상 무시하는 임계치는 틀린 임계치다.** 올리거나, 그 신호를 지워라. 무시하는 신호는 없는 신호보다 나쁘다. 나머지 신호까지 무시하도록 훈련시킨다.
- **임계치는 관측이지 기준이 아니다.** "N일 동안 움직이지 않았다"라고 말할 뿐, "너는 뒤처졌다"라고 말하지 않는다. Stuck Signal은 심판하지 않는다. [생산성과 죄책감에 대하여](/ko/principles#생산성과-죄책감에-대하여) 참고.

도구는 이 숫자들을 너의 이력(Await가 실제로 걸리는 시간, Flow에서 Action을 완료하는 빈도)에서 학습해 조정을 제안할 수 있다. 제안까지다. 조용히 재조정하면 안 된다. 네가 고르지 않은 임계치는 네가 읽을 수 없는 규칙이다.

---

## 다섯 가지 Signal

### 1. Stuck Action

**정의:** 같은 Action이 같은 표현으로 **3일 이상** 연속으로 Today에 남아 미완료.

**원인:** Action이 너무 크거나, 너무 모호하거나, 심리적 저항이 있거나, 외부에 막혀 있음.

**해소 옵션:**
- **Split**: 더 작은 Action으로 쪼갠다. 대부분의 경우 이것이 정답.
- **Rewrite**: 모호하면 구체적인 문장으로 다시 쓴다.
- **Keep (deliberate)**: 의식적 유지. 이유를 명시(외부 대기, 에너지 보존 등). 무의식적 방치와 구분된다.
- **Delete**: 더 이상 관련 없음을 인정.

### 2. Stale Await

**정의:** Await 상태의 Action이 **7일 이상** 응답/진전 없음.

**원인:** 위임하고 잊음, 외부 응답 지연, 위임 자체가 묻힘.

**해소 옵션:**
- **Follow up**: 현재 상태를 물어보는 Action 생성(새 Delegate).
- **Re-delegate**: 다른 대상으로 돌리거나 다시 보낸다.
- **Cancel**: Await 해제. 더 이상 결과가 필요 없음을 인정.

### 3. Stalled Flow

**정의:** 활성 Flow가 **2주 이상** 완료된 Action 없음.

**원인:** 첫 Action이 막힘, Flow 전체가 현재 우선순위와 멀어짐, 에너지 없음.

**해소 옵션:**
- **Keep active**: 이유를 명시. "이번 달은 다른 것 먼저"처럼 의식적 선택.
- **Move to Someday**: 돌아올 의도가 있고 시점만 멈춘다.
- **Demote to Wishlist**: commitment가 아니라 가능성으로 보관한다. Flow가 계속 stall되고 "곧 손댈게"가 더 이상 정직하지 않을 때 사용.
- **Delete**: 더 이상 관련 없음.

### 4. Dormant Cluster

**정의:** 같은 `[[키워드]]` 접두사를 공유하는 Flow들 **전체가 1달 이상** 전진 없음.

**원인:** 큰 목표 자체가 더 이상 활성 우선순위가 아님.

**해소 옵션:**
- **Park cluster**: 개별 Flow가 아니라 묶음 통째로 Someday로. 목표 자체를 park. 돌아올 의도는 남는다.
- **Demote to Wishlist**: 목표는 여전히 흥미롭지만 commitment하지 않는다. 활성화 시 1단계가 "이게 진짜인지 정하기"가 된다. Someday cluster가 6개월 이상 무진척일 때 흔한 경로.
- **Dissolve**: 몇 Flow는 삭제, 몇 Flow는 Area 다른 곳으로 재배치. 큰 목표는 포기하지만 일부 작업만 남긴다.
- **Keep active**: 이유 명시. 분기 Review 때 다시 판단.

### 5. Chronic Today

**정의:** Today가 **연속 3일 이상** 비지 않음.

**원인:** (가장 흔한 순서대로)
- Action들이 너무 크다: 하루에 끝낼 수 없는 Action 다수 포함
- 활성 Flow가 너무 많다: 매일 올라오는 Action이 하루 capacity 초과
- 수동 추가가 너무 많다: Flow가 제안하지 않은 것을 매일 욱여넣음

**해소 옵션:**
- **Action 크기 점검**: Today에 남은 모든 Action을 하루 안에 끝낼 수 있는지 다시 본다. 아니면 분할.
- **활성 Flow 축소**: 일부 Flow를 Someday나 Wishlist로. 이건 [원칙 3](/ko/principles#_3-새로-열기-전에-닫아라)을 사후적으로 적용하는 것이다: 거래 없이 활성 집합을 키웠고, 이제 그 대가를 치르고 있다. 5~10개 활성 Flow가 대부분 적정.
- **수동 추가 절제**: 원칙 2는 "오늘을 큐레이트하라"이지 "오늘에 욱여넣어라"가 아니다.

Chronic Today는 **시스템 장애 신호**다. OTD의 완료 신호 자체가 무너진 상태이므로, 다른 어떤 Stuck Signal보다 우선 해소한다.

Chronic Today가 여러 주에 걸쳐 반복된다면, 더 깊은 문제는 보통 활성화 시점에 원칙 3이 실천되지 않는 것이다. 새 Flow가 들어오는데 떠나는 게 없다. 활성 Flow 집합을 전체적으로 점검하라: 크기뿐 아니라 의식적 거래 없이 들어온 Flow가 무엇인지. 그것들이 강등 후보다.

---

## 임계치는 기본값이다

위의 임계치(3일/7일/2주/1달)는 대부분의 경우에 맞는 보수적인 기본값이다. 작업 성격에 따라 조정할 수 있다:

- 빠른 반복이 중요한 작업: 임계치를 짧게 (예: Stuck Action 2일, Stale Await 3일)
- 장기 프로젝트나 기다림이 본질인 작업: 임계치를 길게 (예: Stale Await 14일)

중요한 건 **임계치 자체를 명시하고 일관되게 적용하는 것**이다. 임계치가 없으면 정체는 영원히 정상으로 보인다.

---

## Review 의식과의 결합

Stuck Signal은 Review에서 체계적으로 점검된다.

**Daily Review**: Chronic Today만 확인. 나머지는 하루 단위로 반응하지 않는다.
- "Today가 연속 며칠째 안 비는가?" 3일 이상이면 오늘 해소 결정을 한다.

**Weekly Review**: 다섯 가지 모두 점검. ([Review](/ko/review) 체크리스트 참조.)
- Stuck Action 식별 → 해소 결정
- Stale Await 식별 → Follow up / Re-delegate / Cancel
- Stalled Flow 식별 → Keep active / Someday / Wishlist / Delete
- Dormant Cluster 식별 → Park / Wishlist 강등 / Dissolve / Keep

**분기 Review**: Dormant Cluster와 Goal 정렬 점검.
- 이번 분기에 전진해야 했지만 Dormant Cluster가 있다면 Goal과의 매핑을 다시 본다.

---

## Signal이 반복되면

같은 Action이 Split 후에도 다시 Stuck이 되고, 같은 Flow가 활성 복귀 후에 다시 Stalled가 된다면, 임계치를 넘은 횟수 자체가 신호다. 패턴이 3번 이상 반복되면:

- **Action 차원**: Action 자체의 정의 방식이 잘못됐거나, 해당 작업을 할 의지/에너지가 실제로 없는 것. 솔직한 질문: 이걸 정말 할 것인가?
- **Flow 차원**: Flow가 현재 삶의 우선순위와 맞지 않는 것. Someday가 아니라 삭제 후보일 수 있음.
- **Chronic Today 반복**: 수용 용량 자체를 재설계해야 한다. 활성 Flow 수를 절반으로 줄이는 것부터.

Stuck Signal은 정체를 드러내기 위한 것이지, 반복해서 리셋하면서 사용자를 속이기 위한 것이 아니다.

---

## 요약

| Signal | 임계치 | 해소 결정 |
|--------|--------|----------|
| Stuck Action | 3일 | Split / Rewrite / Keep / Delete |
| Stale Await | 7일 | Follow up / Re-delegate / Cancel |
| Stalled Flow | 2주 | Keep active / Someday / Wishlist / Delete |
| Dormant Cluster | 1달 | Park / Wishlist 강등 / Dissolve / Keep |
| Chronic Today | 3일 연속 | Action 분할 / Flow 축소 / 수동 추가 절제 |

Stuck Signal은 원칙 2를 깨지 않는다. 결정은 여전히 사용자의 몫이다. 신호는 단지 그 결정을 피할 수 없게 만든다.
