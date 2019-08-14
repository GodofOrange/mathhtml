import Vue from 'vue'
import Router from 'vue-router'
import explore from '@/components/allviews/explore'
import contest from '@/components/extract/contest.vue'
import read from '@/components/read/read.vue'
import homework from '@/components/homework/homework.vue'
import modeling from '@/components/extract/math_model/modeling.vue'
import problem from '@/components/extract/problems/problem.vue'
import problemmodel from '@/components/extract/problem_classify/problem-model.vue'
import askandanswer from '@/components/interact/ask_and_answer.vue'
import communityRank from '@/components/interact/community_rank.vue'
import BigMath from '@/components/interact/BigMath.vue'
import exampleProblem from '@/components/extract/example_problem.vue'
import MyBigMath from '@/components/together/MyBigMath.vue'
import BigClass from '@/components/together/BigClass.vue'
import modelingInfo from '@/components/extract/math_model/modeling_info.vue'
import modelingAdvance from '@/components/extract/math_model/modeling_advance.vue'
import modelingHigh from '@/components/extract/math_model/modeling_high.vue'
import homeworkPlay from '@/components/interact/BigMathWorld/homework_play.vue'
import articleUP from '@/components/interact/BigMathWorld/article.vue'
import ProblemUpload from '@/components/interact/BigMathWorld/ProblemUpload.vue'
import theOneHomework from '@/components/interact/BigMathWorld/homework/theOneHomework.vue'
import CompetitiveIndex from '@/components/interact/rank/CompetitiveIndex'
import BigEfficiency from '@/components/interact/rank/BigEfficiency'
import Liveness from '@/components/interact/rank/Liveness'
import onLineTime from '@/components/interact/rank/onLineTime'
import IntegralRanking from '@/components/interact/rank/IntegralRanking'
import Login from '@/components/allviews/Login.vue'
import BigMathGraph from '@/components/together/myBigMathViews/BigMathGraph.vue'
import StudyAbility from '@/components/together/myBigMathViews/StudyAbility.vue'
import ChatRoom from '@/components/together/myBigClass/ChatRoom.vue'
import makeFriend from '@/components/together/myBigClass/makeFriend.vue'
import MyBigClass from '@/components/together/myBigClass/MyBigClass.vue'
import Announcement from '@/components/allviews/announcement.vue'
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
