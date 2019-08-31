import Vue from 'vue'
import Router from 'vue-router'
import explore from '@/components/allviews/explore'
const MyOccupation = () => import('@/components/allviews/MyOccupation')
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
const modeling1 = () => import('@/components/extract/math_model/modeling_dev/modeling_1.vue')
const modeling2 = () => import('@/components/extract/math_model/modeling_dev/modeling_2.vue')
const modeling3 = () => import('@/components/extract/math_model/modeling_dev/modeling_3.vue')
const modeling4 = () => import('@/components/extract/math_model/modeling_dev/modeling_4.vue')
const modelvideo1 = () => import('@/components/extract/math_model/modeling_advance_dev/video/model_video_1.vue')
const modelvideo2 = () => import('@/components/extract/math_model/modeling_advance_dev/video/model_video_2.vue')
const modelvideo3 = () => import('@/components/extract/math_model/modeling_advance_dev/video/model_video_3.vue')
const modelvideo4 = () => import('@/components/extract/math_model/modeling_advance_dev/video/model_video_4.vue')
const modelvideo5 = () => import('@/components/extract/math_model/modeling_advance_dev/video/model_video_5.vue')
const modelvideo6 = () => import('@/components/extract/math_model/modeling_advance_dev/video/model_video_6.vue')
const modelvideo7 = () => import('@/components/extract/math_model/modeling_advance_dev/video/model_video_7.vue')
const modelvideo8 = () => import('@/components/extract/math_model/modeling_advance_dev/video/model_video_8.vue')
const modelvideo9 = () => import('@/components/extract/math_model/modeling_advance_dev/video/model_video_9.vue')
const modelvideo10 = () => import('@/components/extract/math_model/modeling_advance_dev/video/model_video_10.vue')
const modelvideo11 = () => import('@/components/extract/math_model/modeling_advance_dev/video/model_video_11.vue')
const modelvideo12 = () => import('@/components/extract/math_model/modeling_advance_dev/video/model_video_12.vue')
const modelvideo13 = () => import('@/components/extract/math_model/modeling_advance_dev/video/model_video_13.vue')
const modelvideo14 = () => import('@/components/extract/math_model/modeling_advance_dev/video/model_video_14.vue')
const modelvideo15 = () => import('@/components/extract/math_model/modeling_advance_dev/video/model_video_15.vue')
const modelvideo16 = () => import('@/components/extract/math_model/modeling_advance_dev/video/model_video_16.vue')
const modelvideo17 = () => import('@/components/extract/math_model/modeling_advance_dev/video/model_video_17.vue')
const modelling5 = () => import('@/components/extract/math_model/modeling_advance_dev/model_5.vue')
const modelling6 = () => import('@/components/extract/math_model/modeling_advance_dev/model_6.vue')
const modelling7 = () => import('@/components/extract/math_model/modeling_advance_dev/model_7.vue')
const modelhigh1 = () => import('@/components/extract/math_model/modeling_high_dev/model_1.vue')
const modelhigh2 = () => import('@/components/extract/math_model/modeling_high_dev/model_2.vue')
const modelhigh3 = () => import('@/components/extract/math_model/modeling_high_dev/model_3.vue')
const modelhigh4 = () => import('@/components/extract/math_model/modeling_high_dev/model_4.vue')
const Enter = () => import('@/components/extract/math_model/modeling_high_dev/Enter.vue')
const Thesis = () => import('@/components/extract/math_model/modeling_high_dev/Thesis.vue')
const teamEnter = () => import('@/components/extract/math_model/modeling_high_dev/teamEnter.vue')
const MyInfomation = () => import('@/components/allviews/MyInfomation.vue')
const game = () => import('@/components/extract/game/game.vue')
const TeacherClient = () => import('@/components/allviews/Teacher/TeacherClient.vue')
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
      component: modelingInfo,
      children: [{path: 'modeling_1', component: modeling1},
        {path: 'modeling_2', component: modeling2},
        {path: 'modeling_3', component: modeling3},
        {path: 'modeling_4', component: modeling4}]
    },
    {
      path: '/extract/modeling_advance',
      name: 'modeling_advance',
      component: modelingAdvance,
      children: [{path: 'modeling_video_1', component: modelvideo1},
        {path: 'modeling_video_2', component: modelvideo2},
        {path: 'modeling_video_3', component: modelvideo3},
        {path: 'modeling_video_4', component: modelvideo4},
        {path: 'modeling_video_5', component: modelvideo5},
        {path: 'modeling_video_6', component: modelvideo6},
        {path: 'modeling_video_7', component: modelvideo7},
        {path: 'modeling_video_8', component: modelvideo8},
        {path: 'modeling_video_9', component: modelvideo9},
        {path: 'modeling_video_10', component: modelvideo10},
        {path: 'modeling_video_11', component: modelvideo11},
        {path: 'modeling_video_12', component: modelvideo12},
        {path: 'modeling_video_13', component: modelvideo13},
        {path: 'modeling_video_14', component: modelvideo14},
        {path: 'modeling_video_15', component: modelvideo15},
        {path: 'modeling_video_16', component: modelvideo16},
        {path: 'modeling_video_17', component: modelvideo17},
        {path: 'modeling5', component: modelling5},
        {path: 'modeling6', component: modelling6},
        {path: 'modeling7', component: modelling7}]
    },
    {
      path: '/extract/modeling_high',
      name: 'modeling_high',
      component: modelingHigh,
      children: [{path: 'modelhigh1', component: modelhigh1},
        {path: 'modelhigh2', component: modelhigh2},
        {path: 'modelhigh3', component: modelhigh3},
        {path: 'modelhigh4', component: modelhigh4},
        {path: 'Thesis', component: Thesis},
        {path: 'Enter', component: Enter},
        {path: 'teamEnter', component: teamEnter}]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/MyInfomation',
      name: 'MyInfomation',
      component: MyInfomation
    },
    {
      path: '/announcement',
      name: 'announcement',
      component: Announcement
    },
    {
      path: '/game',
      name: 'game',
      component: game
    },
    {
      path: '/MyOccupation',
      name: 'MyOccupation',
      component: MyOccupation
    },
    {
      path: '/TeacherClient',
      name: 'TeacherClient',
      component: TeacherClient
    }
  ]
})
