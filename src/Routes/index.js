import React from 'react';
import { CommandBarControl } from '../Controls';
import TeacherProfile from '../Containers/TeacherProfile';
import AttendanceControl from '../Containers/AttendanceControl';
import GradesPerSection from '../Containers/Masters/GradesPerSections';
import Institutes from '../Containers/Intitute';
import Subjects from '../Containers/Masters/Subjects';
import Degrees from '../Containers/Masters/Degrees';
import Students from '../Containers/Masters/Students';
import Teachers from '../Containers/Masters/Teachers';
import Sections from '../Containers/Masters/Sections';
import Parents from '../Containers/Masters/Parents';
import MonthlyTasks from '../Containers/Masters/MonthlyTasks';
import Inscriptions from '../Containers/Transactions/Inscriptions';
import ClassesCalendar from '../Containers/Masters/ClassesCalendar';

const handleTestClik = () => {
    debugger
}

export const routes = [
    {
        name: 'institutes',
        title: 'institutes',
        iconName: 'CityNext',
        path: '/home/institutes',
        component: Institutes,
        color: '#EB5757'
    },
    {
        name: 'subjects',
        title: 'subjects',
        iconName: 'Documentation',
        path: '/home/subjects',
        component: Subjects,
        color: '#F2994A'
    },
    {
        name: 'sections',
        title: 'sections',
        iconName: 'Section',
        path: '/home/sections',
        component: Sections,
        color: '#F2C94C'
    },
    {
        name: 'degrees',
        title: 'degrees',
        iconName: 'UpgradeAnalysis',
        path: '/home/degrees',
        component: Degrees,
        color: '#219653'
    },
    {
        name: 'students',
        title: 'students',
        iconName: 'Group',
        path: '/home/students',
        component: Students,
        color: '#27AE60'
    },
    {
        name: 'parents',
        title: 'parents',
        iconName: 'People',
        path: '/home/parents',
        component: Parents,
        color: '#6FCF97',
    },
    {
        name: 'teachers',
        title: 'teachers',
        iconName: 'ManagerSelfService',
        path: '/home/teachers',
        component: Teachers,
        color: '#2F80ED'
    },
    {
        name: 'monthlyTasks',
        title: 'monthlyTasks',
        iconName: 'TaskManager',
        path: '/home/monthly-tasks',
        component: MonthlyTasks,
        color: '#2D9CDB'
    },
    {
        name: 'classesCalendar',
        title: 'classesCalendar',
        iconName: 'Calendar',
        path: '/home/classes-calendar',
        component: ClassesCalendar,
        color: '#56CCF2'
    },
    // {
    //     name: 'inscriptions',
    //     title: 'inscriptions',
    //     iconName: 'Inscriptions',
    //     path: '/home/inscriptions',
    //     component: Inscriptions
    // },
    // {
    //     name: 'gradesPerSections',
    //     title: 'Grades Per Sections',
    //     iconName: 'profile',
    //     path: '/home/grades-per-section',
    //     component: GradesPerSection
    // },
    // {
    //     name: 'teacherProfile',
    //     title: 'Teacher Profile',
    //     iconName: 'profile',
    //     path: '/home/teacher-profile',
    //     component: TeacherProfile
    // },
    // {
    //     name: 'attendanceControl',
    //     title: 'Attendance Control',
    //     iconName: 'Control',
    //     path: '/home/attendance-control',
    //     component: AttendanceControl
    // },
];