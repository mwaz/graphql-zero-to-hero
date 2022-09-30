const todos = [
  {
    id: "53a0724c-a416-4cac-ae45-bfaedce1f147",
    title: "Learn GraphQL",
    description:
      "Watch a 3-hour YouTube on modern GraphQL, build and host the API",
    isDone: true,
    date: "01-01-2022",
  },
  {
    id: "73a0724c-a416-4cac-ae45-bfaedce1f19f",
    title: "Refactor API codebase",
    description: "Rewrite the API to maintain best code practices",
    isDone: false,
    date: "03-01-2022",
  },
];

exports.db = {
  todos,
};
