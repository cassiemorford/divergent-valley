export enum RatingCategory {
  manager = 'manager-support',
  time = 'working-hours-flexibility',
  information = 'information-dissemination',
  reviews = 'performance-reviews',
  accommodations = 'accommodations',
}

export const rateList = [
  RatingCategory.manager,
  RatingCategory.time,
  RatingCategory.information,
  RatingCategory.reviews,
  RatingCategory.accommodations,
];

export const ratingCategoryToText = {
  [RatingCategory.manager]: `Your manager is supportive. They care about watching you grow, they listen to your concerns, and help you solve problems.`,
  [RatingCategory.time]:
    'You can choose when you work. You have flexibility, and can work at the times that work best for you.',
  [RatingCategory.information]:
    "You recieve important information in a way that is easy to understand. Whether you prefer recordings or written summaries, you're able to consume important company meetings in a way that works for you.",
  [RatingCategory.reviews]:
    "Your performance reviews are fair. Reviews don't critique you on ADHD symptoms. Ahead of annual reviews, you know how you're doing, and what type of feedback is coming.",
  [RatingCategory.accommodations]:
    "You can ask for (and receive) the necessary accommodations you need to succeed. You may ask for adjustments through formal or informal channels, but ultimately you're able to make your workplace work for you.",
};
