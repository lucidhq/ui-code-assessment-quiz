import {
  GraphQLObjectType,
  GraphQLEnumType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} from 'graphql'
import shuffle from 'lodash/fp/shuffle'

const GraphQLCategoryEnum = new GraphQLEnumType({
  name: 'GraphQLCategoryEnum',
  values: {
    ENTERTAINMENT_VIDEO_GAMES: { value: 'Entertainment: Video Games' },
    ENTERTAINMENT_BOAD_GAMES: { value: 'Entertainment: Board Games' },
    ENTERTAINMENT_MUSIC: { value: 'Entertainment: Music' },
    ENTERTAINMENT_FILM: { value: 'Entertainment: Film' },
    ENTERTAINMENT_BOOKS: { value: 'Entertainment: Books' },
    ENTERTAINMENT_COMICS: { value: 'Entertainment: Comics' },
    ENTERTAINMENT_TELEVISION: { value: 'Entertainment: Television' },
    ENTERTAINMENT_JAPANESE_ANIME_MANGA: {
      value: 'Entertainment: Japanese Anime & Manga',
    },
    ENTERTAINMENT_CARTOON_ANIMATIONS: {
      value: 'Entertainment: Cartoon & Animations',
    },
    SCIENCE_NATURE: { value: 'Science & Nature' },
    GENERAL_KNOWLEDGE: { value: 'General Knowledge' },
    HISTORY: { value: 'History' },
    ANIMALS: { value: 'Animals' },
    SCIENCE_MATHEMATICS: { value: 'Science: Mathematics' },
    POLITICS: { value: 'Politics' },
    GEOGRAPHY: { value: 'Geography' },
    VEHICULES: { value: 'Vehicles' },
    SPORTS: { value: 'Sports' },
  },
})

export const GraphQLAnswerTypeEnum = new GraphQLEnumType({
  name: 'GraphQLAnswerTypeEnum',
  values: {
    MULTIPLE: { value: 'multiple' },
    BOOLEAN: { value: 'boolean' },
    TEXT: { value: 'text' },
  },
})

const GraphQLDifficultyEnum = new GraphQLEnumType({
  name: 'GraphQLDifficultyEnum',
  values: {
    EASY: { value: 'easy' },
    MEDIUM: { value: 'medium' },
    HARD: { value: 'hard' },
  },
})

export const GraphQLQuestions = new GraphQLObjectType({
  name: 'GraphQLQuestions',
  description: 'Random questions [Multiple, boolean, text]',
  fields: {
    category: { type: new GraphQLNonNull(GraphQLCategoryEnum) },
    type: { type: new GraphQLNonNull(GraphQLAnswerTypeEnum) },
    difficulty: { type: new GraphQLNonNull(GraphQLDifficultyEnum) },
    question: { type: new GraphQLNonNull(GraphQLString) },
    answers: {
      type: new GraphQLList(GraphQLString),
      resolve: (src) => {
        if (src.type === 'multiple') {
          return shuffle([src.correct_answer, ...src.incorrect_answers])
        }

        if (src.type === 'boolean') {
          return shuffle(['True', 'False'])
        }

        return null
      },
    },
    correctAnswer: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (source) => source.correct_answer,
    },
    incorrectAnswers: {
      type: new GraphQLList(GraphQLString),
      resolve: (source) => source.incorrect_answers,
    },
  },
})

export const GraphQLSummary = new GraphQLObjectType({
  name: 'GraphQLSummary',
  description: 'Summary object',
  fields: {
    correctAnswers: { type: new GraphQLNonNull(GraphQLInt) },
    incorrectAnswers: { type: new GraphQLNonNull(GraphQLInt) },
    totalQuestionsAnswered: { type: new GraphQLNonNull(GraphQLInt) },
    finalScore: { type: new GraphQLNonNull(GraphQLString) },
  },
})
