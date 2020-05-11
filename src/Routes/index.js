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

const handleTestClik = () => {
    debugger
}

export const routes = [
    {
        name: 'institutes',
        title: 'institutes',
        iconName: 'CityNext',
        path: '/home/institutes',
        component: Institutes
    },
    {
        name: 'subjects',
        title: 'subjects',
        iconName: 'Documentation',
        path: '/home/subjects',
        component: Subjects
    },
    {
        name: 'sections',
        title: 'sections',
        iconName: 'UpgradeAnalysis',
        path: '/home/sections',
        component: Sections
    },
    {
        name: 'degrees',
        title: 'degrees',
        iconName: 'UpgradeAnalysis',
        path: '/home/degrees',
        component: Degrees
    },
    {
        name: 'students',
        title: 'students',
        iconName: 'Group',
        path: '/home/students',
        component: Students
    },
    {
        name: 'parents',
        title: 'parents',
        iconName: 'Group',
        path: '/home/parents',
        component: Parents
    },
    {
        name: 'teachers',
        title: 'teachers',
        iconName: 'ManagerSelfService',
        path: '/home/teachers',
        component: Teachers
    },
    {
        name: 'gradesPerSections',
        title: 'Grades Per Sections',
        iconName: 'profile',
        path: '/home/grades-per-section',
        component: GradesPerSection
    },
    {
        name: 'teacherProfile',
        title: 'Teacher Profile',
        iconName: 'profile',
        path: '/home/teacher-profile',
        component: TeacherProfile
    },
    {
        name: 'attendanceControl',
        title: 'Attendance Control',
        iconName: 'Control',
        path: '/home/attendance-control',
        component: AttendanceControl
    },
];