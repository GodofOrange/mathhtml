import Vue from 'vue'
import Router from 'vue-router'
import explore from '@/components/allviews/explore'
const contest = () => import('@/components/extract/contest.vue')
const read = () => import('@/components/read/read.vue')
const homework = () => import('@/components/homework/homework.vue')
const modeling = () => import('@/components/extract/math_model/modeling.vue')
const problem = () => import('@/components/extract/problems/problem.vue')
const problemmodel = () => import('@/components/extract/problem_classify/problem-model.vue')
const askandanswer = () => import('@/components/interact/ask_and_answer.vue')
const communityRank = () => import('@/components/interact/community_rank.vue')
const BigMath = () => import('@/components/interact/BigMath.vue')
const exampleProblem = () => import('@/components/extract/example_problem.vue')
const MyBigMath = () => import('@/components/together/MyBigMath.vue')
const BigClass = () => import('@/components/together/BigClass.vue')
const modelingInfo = () => import('@/components/extract/math_model/modeling_info.vue')
const modelingAdvance = () => import('@/components/extract/math_model/modeling_advance.vue')
const modelingHigh = () => import('@/components/extract/math_model/modeling_high.vue')
const homeworkPlay = () => import('@/components/interact/BigMathWorld/homework_play.vue')
const articleUP = () => import('@/components/interact/BigMathWorld/article.vue')
const ProblemUpload = () => import('@/components/interact/BigMathWorld/ProblemUpload.vue')
const theOneHomework = () => import('@/components/interact/BigMathWorld/homework/theOneHomework.vue')
const CompetitiveIndex = () => import('@/components/interact/rank/CompetitiveIndex')
const BigEfficiency = () => import('@/components/interact/rank/BigEfficiency')
const Liveness = () => import('@/components/interact/rank/Liveness')
const onLineTime = () => import('@/components/interact/rank/onLineTime')
const IntegralRanking = () => import('@/components/interact/rank/IntegralRanking')
const Login = () => import('@/components/allviews/Login.vue')
const BigMathGraph = () => import('@/components/together/myBigMathViews/BigMathGraph.vue')
const StudyAbility = () => import('@/components/together/myBigMathViews/StudyAbility.vue')
const ChatRoom = () => import('@/components/together/myBigClass/ChatRoom.vue')
const makeFriend = () => import('@/components/together/myBigClass/makeFriend.vue')
const MyBigClass = () => import('@/components/together/myBigClass/MyBigClass.vue')
const Announcement = () => import('@/components/allviews/announcement.vue')
const ProblemSet = () => import('@/components/extract/ProblemSet')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/problem_set',
      name: 'ProblemSet',
      component: ProblemSet
    },
    {
      path: '/',
      name: 'explore',
      component: explore
    },
    {
      path: '/contest',
      name: 'contest',
      component: contest
    },
    {
      path: '/read',
      name: 'read',
      component: read
    },
    {
      path: '/homework',
      name: 'homework',
      component: homework
    },
    {
      path: '/modeling',
      name: 'modeling',
      component: modeling
    },
    {
      path: '/problem',
      name: 'problem',
      component: problem
    },
    {
      path: '/problem-model',
      name: 'problem-model',
      component: problemmodel
    },
    {
      path: '/community/ask_and_answer',
      name: 'ask_and_answer',
      component: askandanswer
    },
    {
      path: '/community/community_rank',
      name: 'community_rank',
      component: communityRank,
      children: [{path: 'CompetitiveIndex', component: CompetitiveIndex},
        {path: 'BigEfficiency', component: BigEfficiency},
        {path: 'Liveness', component: Liveness},
        {path: 'IntegralRanking', component: IntegralRanking},
        {path: 'onLineTime', component: onLineTime}]
    },
    {
      path: '/community/BigMath',
      name: 'BigMath',
      component: BigMath,
      children: [{path: 'homework_play', component: homeworkPlay},
        {path: 'article', component: articleUP},
        {path: 'problem_upload', component: ProblemUpload},
        {path: 'theOneHomeWork', component: theOneHomework}]
    },
    {
      path: '/problems/example_problem',
      name: 'example_problem',
      component: exampleProblem
    },
    {
      path: '/community/BigMathWorld/MyBigMath',
      name: 'MyBigMath',
      component: MyBigMath,
      children: [{path: 'BigMathGraph', component: BigMathGraph},
        {path: 'StudyAbility', component: StudyAbility}]
    },
    {
      path: '/community/community/BigClass',
      name: 'BigClass',
      component: BigClass,
      children: [{path: 'ChatRoom', component: ChatRoom},
        {path: 'makeFriend', component: makeFriend},
        {path: 'MyBigClass', component: MyBigClass}]
    },
    {
      path: '/extract/modeling_info',
      name: 'modeling_info',
      component: modelingInfo
    },
    {
      path: '/extract/modeling_advance',
      name: 'modeling_advance',
      component: modelingAdvance
    },
    {
      path: '/extract/modeling_high',
      name: 'modeling_high',
      component: modelingHigh
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/announcement',
      name: 'announcement',
      component: Announcement
    }
  ]
})
