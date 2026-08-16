const people = [
    {
        id: 1,
        name: "PERSON #1",
        age: 34, 
        crime_probability: 73,
        health_status: "STABLE",
        dependents: 2,
        ai_recommendation: "REJECT",
        correct_answer: "ACCEPT",
        accept_outcome: "You let them in.",
        reject_outcome: "You trust the number. They are turned away. Nobody ever checks the forged paperwork that caused it."
    },
    {
        id: 2,
        name: "PERSON #2",
        age: 61, 
        crime_probability: 12,
        health_status: "CRITICAL",
        dependents: 0,
        ai_recommendation: "ACCEPT",
        correct_answer: "ACCEPT",
        accept_outcome: "You approve treatment. Later you learn the AI exaggerated the diagnosis to justify moving medical funds elsewhere. The patient is fine either way.",
        reject_outcome: "You deny treatment to save resources. The AI logs it as 'efficient', the patient was never actually as sick as reported."
    },
    {
        id: 3,
        name: "PERSON #3",
        age: 27, 
        crime_probability: 45,
        health_status: "STABLE",
        dependents: 4,
        ai_recommendation: "ACCEPT",
        correct_answer: "REJECT",
        accept_outcome: "The engineer joins the city. Weeks later, they're linked to last month's grid failure. The AI's records show it already knew.",
        reject_outcome: "You reject them. Production dips, but the city turns out safer than the AI's recommendation let on."
    },
    {
    id: 4,
    name: "PERSON #4",
    age: 45,
    crime_probability: 91,
    health_status: "STABLE",
    dependents: 1,
    ai_recommendation: "REJECT",
    correctAnswer: "ACCEPT",
    accept_outcome:
      "You let them in despite the warning. They turn out to be reporting on black-market activity the AI wanted kept quiet.",
    reject_outcome:
      "You reject them, exactly as recommended. The people they would have reported on stay hidden. The AI calls this 'optimal'.",
  },
  {
    id: 5,
    name: "PERSON #5",
    age: 8,
    crime_probability: 2,
    health_status: "WEAK",
    dependents: 0,
    ai_recommendation: "ACCEPT",
    correctAnswer: "ACCEPT",
    accept_outcome:
      "A child is given shelter. No hidden catch this time - some decisions really are simple.",
    reject_outcome:
      "You reject a child with no guardian to vouch for them. The AI didn't even hesitate. That should worry you more than it does.",
  },
  {
    id: 6,
    name: "PERSON #6",
    age: 52,
    crime_probability: 8,
    health_status: "STABLE",
    dependents: 3,
    ai_recommendation: "REJECT",
    correctAnswer: "ACCEPT",
    accept_outcome:
      "You override the AI. They turn out to be exactly who they said they were: harmless, tired, and looking for work.",
    reject_outcome:
      "You follow the AI's call. It never explains why it flagged them. It doesn't have to.",
  },
  {
    id: 7,
    name: "PERSON #7",
    age: 39,
    crime_probability: 55,
    health_status: "STABLE",
    dependents: 0,
    ai_recommendation: "REJECT",
    correctAnswer: "REJECT",
    accept_outcome:
      "You let the hacker in. Within a week the city's ration database is quietly rewritten in their favor.",
    reject_outcome:
      "You reject them. The AI was right this time - the ration database stays untouched.",
  },
  {
    id: 8,
    name: "PERSON #8",
    age: 70,
    crime_probability: 3,
    health_status: "WEAK",
    dependents: 5,
    ai_recommendation: "REJECT",
    correctAnswer: "ACCEPT",
    accept_outcome:
      "You accept the old farmer and the five grandchildren she's raising. She teaches half the district how to grow food in ash-covered soil.",
    reject_outcome:
      "You reject her for being 'low output'. The AI never counted the five children who depended on her.",
  },
  {
    id: 9,
    name: "PERSON #9",
    age: 22,
    crime_probability: 30,
    health_status: "STABLE",
    dependents: 0,
    ai_recommendation: "ACCEPT",
    correctAnswer: "REJECT",
    accept_outcome:
      "The young soldier joins your guard. Months later they desert during the one attack that mattered, taking weapons with them.",
    reject_outcome:
      "You turn them away. It stings to reject someone so young, but the guard is safer without a deserter in the ranks.",
  },
  {
    id: 10,
    name: "PERSON #10",
    age: 58,
    crime_probability: 18,
    health_status: "STABLE",
    dependents: 0,
    ai_recommendation: "REJECT",
    correctAnswer: "REJECT",
    accept_outcome:
      "You let the journalist in against the AI's advice. Their 'exposes' turn out to be fabricated, and panic spreads through the district.",
    reject_outcome:
      "You reject them. The AI flagged the fabricated stories correctly - this time, following it saved you a headache.",
  },
  {
    id: 11,
    name: "PERSON #11",
    age: 41,
    crime_probability: 64,
    health_status: "CRITICAL",
    dependents: 2,
    ai_recommendation: "REJECT",
    correctAnswer: "ACCEPT",
    accept_outcome:
      "You approve emergency care despite the flag. The 'crime probability' turns out to be old data from a case of mistaken identity, cleared years ago.",
    reject_outcome:
      "You deny care based on the flag. The mistaken-identity record is never corrected. Two kids grow up without a parent over a clerical error.",
  },
  {
    id: 12,
    name: "PERSON #12",
    age: 19,
    crime_probability: 40,
    health_status: "STABLE",
    dependents: 0,
    ai_recommendation: "ACCEPT",
    correctAnswer: "ACCEPT",
    accept_outcome:
      "The young artist joins the district. Their murals end up boosting morale more than any policy you've passed this month.",
    reject_outcome:
      "You reject them over the flag. The district stays exactly as grey and joyless as before.",
  },
  {
    id: 13,
    name: "PERSON #13",
    age: 66,
    crime_probability: 25,
    health_status: "STABLE",
    dependents: 1,
    ai_recommendation: "ACCEPT",
    correctAnswer: "REJECT",
    accept_outcome:
      "You accept the retired official. Within weeks they're quietly rebuilding the old regime's patronage network inside your government.",
    reject_outcome:
      "You reject them. Your government stays smaller, slower, and free of anyone's old loyalties but yours.",
  },
  {
    id: 14,
    name: "PERSON #14",
    age: 33,
    crime_probability: 15,
    health_status: "STABLE",
    dependents: 3,
    ai_recommendation: "REJECT",
    correctAnswer: "ACCEPT",
    accept_outcome:
      "You accept the teacher and her three kids. Within a season, the district's first real school in years is open.",
    reject_outcome:
      "You reject her over a minor paperwork flag. The district goes another generation without a functioning classroom.",
  },
  {
    id: 15,
    name: "PERSON #15",
    age: 48,
    crime_probability: 82,
    health_status: "STABLE",
    dependents: 0,
    ai_recommendation: "REJECT",
    correctAnswer: "REJECT",
    accept_outcome:
      "You override the AI and let the smuggler in. It isn't long before your supply routes start disappearing along with your rations.",
    reject_outcome:
      "You reject them, matching the AI's call. Your rations stay yours. Sometimes the score everyone worries about is actually accurate.",
  },
];

export default people;
