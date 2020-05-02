import React from 'react';
import { CommandBarControl } from '../Controls';
import TeacherProfile from '../Containers/TeacherProfile';
import AttendanceControl from '../Containers/AttendanceControl';
import GradesPerSection from '../Containers/Masters/GradesPerSections';
import Institutes from '../Containers/Intitute';

const handleTestClik = () => {
    debugger
}

export const routes = [
    {
        name: 'institutes',
        title: 'Intitutes',
        iconName: 'intitute',
        path: '/home/institutes',
        component: Institutes
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