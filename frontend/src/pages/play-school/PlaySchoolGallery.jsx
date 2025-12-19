import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';


import img53 from "../../assets/play-school/Picture53.jpg"
import img54 from "../../assets/play-school/Picture54.jpg"
import img55 from "../../assets/play-school/Picture55.jpg"
import img56 from "../../assets/play-school/Picture56.jpg"
import img57 from "../../assets/play-school/Picture57.jpg"
import img58 from "../../assets/play-school/Picture58.jpg"
import img59 from "../../assets/play-school/Picture59.jpg"
import img60 from "../../assets/play-school/Picture60.jpg"
import img62 from "../../assets/play-school/Picture62.jpg"
import img61 from "../../assets/play-school/Picture61.jpg"

import img63 from "../../assets/play-school/Picture63.jpg"
import img64 from "../../assets/play-school/Picture64.jpg"
import img65 from "../../assets/play-school/Picture65.jpg"
import img66 from "../../assets/play-school/Picture66.jpg"
import img67 from "../../assets/play-school/Picture67.jpg"
import img68 from "../../assets/play-school/Picture68.jpg"
import img69 from "../../assets/play-school/Picture69.jpg"
import img70 from "../../assets/play-school/Picture70.jpg"
import img72 from "../../assets/play-school/Picture72.jpg"
import img71 from "../../assets/play-school/Picture71.jpg"
import img73 from "../../assets/play-school/Picture73.jpg"
import img74 from "../../assets/play-school/Picture74.jpg"
import img75 from "../../assets/play-school/Picture75.jpg"
import img76 from "../../assets/play-school/Picture76.jpg"
import img77 from "../../assets/play-school/Picture77.jpg"
import img78 from "../../assets/play-school/Picture78.jpg"
import img79 from "../../assets/play-school/Picture79.jpg"
import img80 from "../../assets/play-school/Picture80.jpg"

import img92 from "../../assets/play-school/Picture92.jpg"
import img91 from "../../assets/play-school/Picture91.jpg"
import img93 from "../../assets/play-school/Picture93.jpg"

import img85 from "../../assets/play-school/Picture85.jpg"
import img86 from "../../assets/play-school/Picture86.jpg"
import img87 from "../../assets/play-school/Picture87.jpg"
import img88 from "../../assets/play-school/Picture88.jpg"
import img89 from "../../assets/play-school/Picture89.jpg"
import img90 from "../../assets/play-school/Picture90.jpg"

import img95 from "../../assets/play-school/Picture95.jpg"
import img96 from "../../assets/play-school/Picture96.jpg"
import img97 from "../../assets/play-school/Picture97.jpg"
import img81 from "../../assets/play-school/Picture81.jpg"
import img82 from "../../assets/play-school/Picture82.jpg"
import img83 from "../../assets/play-school/Picture83.jpg"
import img94 from "../../assets/play-school/Picture94.jpg"

import img105 from "../../assets/play-school/Picture105.jpg"
import img106 from "../../assets/play-school/Picture106.jpg"
import img107 from "../../assets/play-school/Picture107.jpg"
import img108 from "../../assets/play-school/Picture108.jpg"
import img109 from "../../assets/play-school/Picture109.jpg"
import img110 from "../../assets/play-school/Picture110.jpg"


import img111 from "../../assets/play-school/Picture111.jpg"
import img112 from "../../assets/play-school/Picture112.jpg"
import img113 from "../../assets/play-school/Picture113.jpg"
import img114 from "../../assets/play-school/Picture114.jpg"
import img115 from "../../assets/play-school/Picture115.jpg"
import img116 from "../../assets/play-school/Picture116.jpg"
import img117 from "../../assets/play-school/Picture117.jpg"
import img118 from "../../assets/play-school/Picture118.jpg"
import img119 from "../../assets/play-school/Picture119.jpg"
import img120 from "../../assets/play-school/Picture120.jpg"

import img121 from "../../assets/play-school/Picture121.jpg"
import img122 from "../../assets/play-school/Picture122.jpg"
import img123 from "../../assets/play-school/Picture123.jpg"
import img124 from "../../assets/play-school/Picture124.jpg"
import img125 from "../../assets/play-school/Picture125.jpg"
import img126 from "../../assets/play-school/Picture126.jpg"
import img127 from "../../assets/play-school/Picture127.jpg"
import img128 from "../../assets/play-school/Picture128.jpg"
import img129 from "../../assets/play-school/Picture129.jpg"
import img130 from "../../assets/play-school/Picture130.jpg"

import img131 from "../../assets/play-school/Picture131.jpg"
import img132 from "../../assets/play-school/Picture132.jpg"
import img133 from "../../assets/play-school/Picture133.jpg"
import img134 from "../../assets/play-school/Picture134.jpg"
import img135 from "../../assets/play-school/Picture135.jpg"
import img136 from "../../assets/play-school/Picture136.jpg"
import img137 from "../../assets/play-school/Picture137.jpg"
import img138 from "../../assets/play-school/Picture138.jpg"
import img139 from "../../assets/play-school/Picture139.jpg"
import img140 from "../../assets/play-school/Picture140.jpg"

import img141 from "../../assets/play-school/Picture141.jpg"
import img142 from "../../assets/play-school/Picture142.jpg"
import img143 from "../../assets/play-school/Picture143.jpg"
import img144 from "../../assets/play-school/Picture144.jpg"
import img145 from "../../assets/play-school/Picture145.jpg"
import img146 from "../../assets/play-school/Picture146.jpg"
import img147 from "../../assets/play-school/Picture147.jpg"
import img148 from "../../assets/play-school/Picture148.jpg"
import img149 from "../../assets/play-school/Picture149.jpg"
import img150 from "../../assets/play-school/Picture150.jpg"

import img151 from "../../assets/play-school/Picture151.jpg"
import img152 from "../../assets/play-school/Picture152.jpg"
import img153 from "../../assets/play-school/Picture153.jpg"
import img154 from "../../assets/play-school/Picture154.jpg"
import img155 from "../../assets/play-school/Picture155.jpg"
import img156 from "../../assets/play-school/Picture156.jpg"
import img157 from "../../assets/play-school/Picture157.jpg"

import img159 from "../../assets/play-school/Picture159.jpg"
import img161 from "../../assets/play-school/Picture161.jpg"


import img162 from "../../assets/play-school/Picture162.jpg"
import img163 from "../../assets/play-school/Picture163.jpg"
import img164 from "../../assets/play-school/Picture164.jpg"
import img165 from "../../assets/play-school/Picture165.jpg"
import img166 from "../../assets/play-school/Picture166.jpg"
import img167 from "../../assets/play-school/Picture167.jpg"
import img168 from "../../assets/play-school/Picture168.jpg"
import img169 from "../../assets/play-school/Picture169.jpg"
import img170 from "../../assets/play-school/Picture170.jpg"

import img171 from "../../assets/play-school/Picture171.jpg"
import img172 from "../../assets/play-school/Picture172.jpg"
import img173 from "../../assets/play-school/Picture173.jpg"
import img174 from "../../assets/play-school/Picture174.jpg"
import img175 from "../../assets/play-school/Picture175.jpg"
import img176 from "../../assets/play-school/Picture176.jpg"
import img177 from "../../assets/play-school/Picture177.jpg"

import img179 from "../../assets/play-school/Picture179.jpg"
import img180 from "../../assets/play-school/Picture180.jpg"
import img182 from "../../assets/play-school/Picture182.jpg"
import img183 from "../../assets/play-school/Picture183.jpg"
import img184 from "../../assets/play-school/Picture184.jpg"
import img185 from "../../assets/play-school/Picture185.jpg"
import img186 from "../../assets/play-school/Picture186.jpg"
import img187 from "../../assets/play-school/Picture187.jpg"
import img188 from "../../assets/play-school/Picture188.jpg"
import img189 from "../../assets/play-school/Picture189.jpg"
import img190 from "../../assets/play-school/Picture190.jpg"
import img191 from "../../assets/play-school/Picture191.jpg"
import img192 from "../../assets/play-school/Picture192.jpg"
import img181 from "../../assets/play-school/Picture181.jpg"








const PlaySchoolGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const galleryData = [
        {
            category: "Classrooms",
            images: [
                {
                    primary: img81,
                    hover: img82,
                    title: "Play Home Classroom",
                    description: "Bright and colorful learning environment"
                },
                  {
                    primary: img94,
                    hover: img95,
                    title: "UKG Classroom",
                    description: "Advanced learning environment"
                },
                {
                    primary: img82,
                    hover: img83,
                    title: "Pre-KG Classroom",
                    description: "Interactive learning space"
                },               
              
                {
                    primary: img95,
                    hover: img96,
                    title: "Learning Activities",
                    description: "Hands-on learning sessions"
                },
                {
                    primary: img96,
                    hover: img97,
                    title: "Group Activities",
                    description: "Collaborative learning"
                },
                 {
                    primary: img83,
                    hover: img94,
                    title: "LKG Classroom",
                    description: "Well-equipped learning area"
                },






                {
                    primary: img131,
                    hover: img132,
                    title: "Play Home Classroom",
                    description: "Bright and colorful learning environment"
                },
                  {
                    primary: img132,
                    hover: img133,
                    title: "UKG Classroom",
                    description: "Advanced learning environment"
                },
                {
                    primary: img133,
                    hover: img134,
                    title: "Pre-KG Classroom",
                    description: "Interactive learning space"
                },               
              
                {
                    primary: img135,
                    hover: img136,
                    title: "Learning Activities",
                    description: "Hands-on learning sessions"
                },
                {
                    primary: img136,
                    hover: img137,
                    title: "Group Activities",
                    description: "Collaborative learning"
                },
                 {
                    primary: img134,
                    hover: img135,
                    title: "LKG Classroom",
                    description: "Well-equipped learning area"
                },
                {
                    primary: img137,
                    hover: img138,
                    title: "Play Home Classroom",
                    description: "Bright and colorful learning environment"
                },
                  {
                    primary: img138,
                    hover: img139,
                    title: "UKG Classroom",
                    description: "Advanced learning environment"
                },
                {
                    primary: img139,
                    hover: img140,
                    title: "Pre-KG Classroom",
                    description: "Interactive learning space"
                },               
              
                {
                    primary: img140,
                    hover: img141,
                    title: "Learning Activities",
                    description: "Hands-on learning sessions"
                },
                {
                    primary: img141,
                    hover: img142,
                    title: "Group Activities",
                    description: "Collaborative learning"
                },
                 {
                    primary: img142,
                    hover: img143,
                    title: "LKG Classroom",
                    description: "Well-equipped learning area"
                },
                {
                    primary: img143,
                    hover: img144,
                    title: "Play Home Classroom",
                    description: "Bright and colorful learning environment"
                },
                  {
                    primary: img144,
                    hover: img145,
                    title: "UKG Classroom",
                    description: "Advanced learning environment"
                },
                {
                    primary: img145,
                    hover: img146,
                    title: "Pre-KG Classroom",
                    description: "Interactive learning space"
                },               
              
                {
                    primary: img146,
                    hover: img147,
                    title: "Learning Activities",
                    description: "Hands-on learning sessions"
                },
                {
                    primary: img147,
                    hover: img148,
                    title: "Group Activities",
                    description: "Collaborative learning"
                },
                 {
                    primary: img148,
                    hover: img149,
                    title: "LKG Classroom",
                    description: "Well-equipped learning area"
                },
                {
                    primary: img149,
                    hover: img150,
                    title: "Play Home Classroom",
                    description: "Bright and colorful learning environment"
                },
                  {
                    primary: img150,
                    hover: img151,
                    title: "UKG Classroom",
                    description: "Advanced learning environment"
                },
                {
                    primary: img152,
                    hover: img153,
                    title: "Pre-KG Classroom",
                    description: "Interactive learning space"
                },               
              
                {
                    primary: img151,
                    hover: img152,
                    title: "Learning Activities",
                    description: "Hands-on learning sessions"
                },
                {
                    primary: img153,
                    hover: img154,
                    title: "Group Activities",
                    description: "Collaborative learning"
                },
                 {
                    primary: img154,
                    hover: img155,
                    title: "LKG Classroom",
                    description: "Well-equipped learning area"
                },
                {
                    primary: img156,
                    hover: img157,
                    title: "Play Home Classroom",
                    description: "Bright and colorful learning environment"
                },
                  {
                    primary: img157,
                    hover: img159,
                    title: "UKG Classroom",
                    description: "Advanced learning environment"
                },
                           
              
                {
                    primary: img159,
                    hover: img161,
                    title: "Learning Activities",
                    description: "Hands-on learning sessions"
                },
                {
                    primary: img161,
                    hover: img97,
                    title: "Group Activities",
                    description: "Collaborative learning"
                },
                




            ]
        },
        {
            category: "Activities & Events",
            images: [
                {
                    primary: img179,
                    hover: img180,
                    title: "Art and Craft Activity",
                    description: "Creative expression sessions"
                },



                 {
                    primary: img180,
                    hover: img181,
                    title: "Art and Craft Activity",
                    description: "Creative expression sessions"
                },
                 {
                    primary: img181,
                    hover:img182,
                    title: "Art and Craft Activity",
                    description: "Creative expression sessions"
                },
                 {
                    primary: img183,
                    hover:img184,
                    title: "Art and Craft Activity",
                    description: "Creative expression sessions"
                },
                 {
                    primary: img184,
                    hover:img185,
                    title: "Art and Craft Activity",
                    description: "Creative expression sessions"
                },
                 {
                    primary: img185,
                    hover:img186,
                    title: "Art and Craft Activity",
                    description: "Creative expression sessions"
                },

                 {
                    primary: img186,
                    hover:img187,
                    title: "Art and Craft Activity",
                    description: "Creative expression sessions"
                },
                 {
                    primary: img187,
                    hover:img188,
                    title: "Art and Craft Activity",
                    description: "Creative expression sessions"
                },
                 {
                    primary: img189,
                    hover:img190,
                    title: "Art and Craft Activity",
                    description: "Creative expression sessions"
                },
                 {
                    primary: img190,
                    hover:img191,
                    title: "Art and Craft Activity",
                    description: "Creative expression sessions"
                },
                 {
                    primary: img191,
                    hover:img192,
                    title: "Art and Craft Activity",
                    description: "Creative expression sessions"
                },
               







                {
                    primary: img165,
                    hover: img164,
                    title: "Colour Day Celebration",
                    description: "Learning through colors"
                },
                 {
                    primary: img164,
                    hover: img163,
                    title: "Colour Day Celebration",
                    description: "Learning through colors"
                },
                 {
                    primary: img163,
                    hover: img162,
                    title: "Colour Day Celebration",
                    description: "Learning through colors"
                },
                 {
                    primary: img162,
                    hover: img166,
                    title: "Colour Day Celebration",
                    description: "Learning through colors"
                },
                 {
                    primary: img166,
                    hover: img167,
                    title: "Colour Day Celebration",
                    description: "Learning through colors"
                },
                 {
                    primary: img167,
                    hover: img168,
                    title: "Colour Day Celebration",
                    description: "Learning through colors"
                },
                 {
                    primary: img168,
                    hover: img169,
                    title: "Colour Day Celebration",
                    description: "Learning through colors"
                },
                 {
                    primary: img169,
                    hover: img170,
                    title: "Colour Day Celebration",
                    description: "Learning through colors"
                },
                 {
                    primary: img170,
                    hover: img171,
                    title: "Colour Day Celebration",
                    description: "Learning through colors"
                },
                 {
                    primary: img171,
                    hover: img172,
                    title: "Colour Day Celebration",
                    description: "Learning through colors"
                },
                 {
                    primary: img172,
                    hover: img173,
                    title: "Colour Day Celebration",
                    description: "Learning through colors"
                },
                   {
                    primary: img173,
                    hover: img174,
                    title: "Colour Day Celebration",
                    description: "Learning through colors"
                },
                   {
                    primary: img174,
                    hover: img175,
                    title: "Colour Day Celebration",
                    description: "Learning through colors"
                },
                   {
                    primary: img175,
                    hover: img176,
                    title: "Colour Day Celebration",
                    description: "Learning through colors"
                },
                   {
                    primary: img176,
                    hover: img177,
                    title: "Colour Day Celebration",
                    description: "Learning through colors"
                },
                   {
                    primary: img177,
                    hover: img173,
                    title: "Colour Day Celebration",
                    description: "Learning through colors"
                },





              
            ]
        },
         {
            category: "Inaugural & Parent Orientation",
            images: [
                {
                    primary: img93 ,
                    hover:  img92,
                    title: "Parent & Teacher Meeting",
                    description: "Special programs and interactive sessions help parents understand our holistic approach"
                },
                {
                    primary:  img92,
                    hover:  img91,
                    title: "Parent & Teacher Meeting",
                    description: "Special programs and interactive sessions help parents understand our holistic approach"
                },
                {
                    primary:  img91,
                    hover:  img90,
                    title: "Parent & Teacher Meeting",
                    description: "Special programs and interactive sessions help parents understand our holistic approach"
                },
                {
                    primary:  img90,
                    hover:  img89,
                    title: "Parent & Teacher Meeting",
                    description: "Special programs and interactive sessions help parents understand our holistic approach"
                },
                {
                    primary:  img89,
                    hover:  img88,
                    title: "Parent & Teacher Meeting",
                    description: "Special programs and interactive sessions help parents understand our holistic approach"
                },
                {
                    primary:  img88,
                    hover:  img87,
                    title: "Parent & Teacher Meeting",
                    description: "Special programs and interactive sessions help parents understand our holistic approach"
                },
                {
                    primary:  img87,
                    hover:  img86,
                    title: "Parent & Teacher Meeting",
                    description: "Special programs and interactive sessions help parents understand our holistic approach"
                },
                {
                    primary:  img86,
                    hover:  img85,
                    title: "Parent & Teacher Meeting",
                    description: "Special programs and interactive sessions help parents understand our holistic approach"
                },



                  {
                    primary:  img121,
                    hover:  img122,
                    title: "Father's Day",
                    description: "Celebration strengthens the father-child bond and teaches children about gratitude and love."
                },
                    {
                    primary:  img122,
                    hover:  img123,
                    title: "Father's Day",
                    description: "Celebration strengthens the father-child bond and teaches children about gratitude and love."
                },
                    {
                    primary:  img123,
                    hover:  img124,
                    title: "Father's Day",
                    description: "Celebration strengthens the father-child bond and teaches children about gratitude and love."
                },
                    {
                    primary:  img124,
                    hover:  img125,
                    title: "Father's Day",
                    description: "Celebration strengthens the father-child bond and teaches children about gratitude and love."
                },
                    {
                    primary:  img125,
                    hover:  img126,
                    title: "Father's Day",
                    description: "Celebration strengthens the father-child bond and teaches children about gratitude and love."
                },
                    {
                    primary:  img126,
                    hover:  img127,
                    title: "Father's Day",
                    description: "Celebration strengthens the father-child bond and teaches children about gratitude and love."
                },
                    {
                    primary:  img127,
                    hover:  img128,
                    title: "Father's Day",
                    description: "Celebration strengthens the father-child bond and teaches children about gratitude and love."
                },
                    {
                    primary:  img128,
                    hover:  img129,
                    title: "Father's Day",
                    description: "Celebration strengthens the father-child bond and teaches children about gratitude and love."
                },
               
                    {
                    primary:  img130,
                    hover:  img85,
                    title: "Father's Day",
                    description: "Celebration strengthens the father-child bond and teaches children about gratitude and love."
                },
                  
                
            ]
        },
        {
            category: "Festivals & Celebrations",
            images: [
                {
                    primary: img63,
                    hover: img64,
                    title: "Ganesh Chaturthi",
                    description: "Festival celebration"
                },
                {
                    primary: img64,
                    hover: img65,
                    title: "Dasara Celebration",
                    description: "Traditional festivities"
                },
                {
                    primary: img65,
                    hover: img66,
                    title: "Diwali Celebration",
                    description: "Festival of lights"
                },
                {
                    primary:img66,
                    hover: img67,
                    title: "Christmas Program",
                    description: "Festive celebrations"
                },
                {
                    primary: img67,
                    hover: img68,
                    title: "Sankranthi Festival",
                    description: "Traditional celebration"
                },
                {
                    primary: img68,
                    hover:img69,
                    title: "Celebration",
                    description: "National celebration"
                },
                 {
                    primary: img69,
                    hover: img70,
                    title: "Ganesh Chaturthi",
                    description: "Festival celebration"
                },
                {
                    primary: img70,
                    hover: img71,
                    title: "Dasara Celebration",
                    description: "Traditional festivities"
                },
                {
                    primary: img71,
                    hover: img72,
                    title: "Diwali Celebration",
                    description: "Festival of lights"
                },
                {
                    primary:img72,
                    hover: img73,
                    title: "Christmas Program",
                    description: "Festive celebrations"
                },
                {
                    primary: img73,
                    hover: img74,
                    title: "Sankranthi Festival",
                    description: "Traditional celebration"
                },
                {
                    primary: img74,
                    hover:img75,
                    title: "Celebration",
                    description: "National celebration"
                },
                 {
                    primary: img75,
                    hover: img76,
                    title: "Dasara Celebration",
                    description: "Traditional festivities"
                },
                {
                    primary: img76,
                    hover: img77,
                    title: "Diwali Celebration",
                    description: "Festival of lights"
                },
                {
                    primary:img77,
                    hover: img78,
                    title: "Christmas Program",
                    description: "Festive celebrations"
                },
                {
                    primary: img78,
                    hover: img79,
                    title: "Sankranthi Festival",
                    description: "Traditional celebration"
                },
                {
                    primary: img79,
                    hover:img80,
                    title: "Celebration",
                    description: "National celebration"
                },




                  {
                    primary: img105,
                    hover: img106,
                    title: "Dasara Celebration",
                    description: "Traditional festivities"
                },
                  {
                    primary: img106,
                    hover: img107,
                    title: "Dasara Celebration",
                    description: "Traditional festivities"
                },
                  {
                    primary: img107,
                    hover: img108,
                    title: "Dasara Celebration",
                    description: "Traditional festivities"
                },
                  {
                    primary: img108,
                    hover: img109,
                    title: "Dasara Celebration",
                    description: "Traditional festivities"
                },
                  {
                    primary: img109,
                    hover: img110,
                    title: "Dasara Celebration",
                    description: "Traditional festivities"
                },
                  {
                    primary: img110,
                    hover: img106,
                    title: "Dasara Celebration",
                    description: "Traditional festivities"
                },






                {
                    primary: img111,
                    hover: img112,
                    title: "Diwali Celebration",
                    description: "Festival of lights"
                },
                {
                    primary: img112,
                    hover: img113,
                    title: "Diwali Celebration",
                    description: "Festival of lights"
                },
                {
                    primary: img113,
                    hover: img114,
                    title: "Diwali Celebration",
                    description: "Festival of lights"
                },

                {
                    primary: img115,
                    hover: img116,
                    title: "Diwali Celebration",
                    description: "Festival of lights"
                },
                {
                    primary: img116,
                    hover: img117,
                    title: "Diwali Celebration",
                    description: "Festival of lights"
                },
                {
                    primary: img117,
                    hover: img118,
                    title: "Diwali Celebration",
                    description: "Festival of lights"
                },
                {
                    primary: img118,
                    hover: img119,
                    title: "Diwali Celebration",
                    description: "Festival of lights"
                },
                {
                    primary: img119,
                    hover: img120,
                    title: "Diwali Celebration",
                    description: "Festival of lights"
                },
                {
                    primary: img120,
                    hover: img114,
                    title: "Diwali Celebration",
                    description: "Festival of lights"
                },
                {
                    primary: img114,
                    hover: img66,
                    title: "Diwali Celebration",
                    description: "Festival of lights"
                },
                  










            ]
        },
        {
            category: "Sports & Outdoor",
            images: [
                {
                    primary: img53,
                    hover: img54,
                    title: "Sports Day",
                    description: "Athletic activities"
                },
                {
                    primary: img55,
                    hover: img55,
                    title: "Outdoor Play",
                    description: "Physical development"
                },
                {
                    primary: img56,
                    hover: img56,
                    title: "Yoga Day",
                    description: "Wellness activities"
                },
                {
                    primary: img57,
                    hover: img62,
                    title: "Ball Pool Fun",
                    description: "Indoor play area"
                },
                {
                    primary: img58,
                    hover: img61,
                    title: "Playground Activities",
                    description: "Outdoor games"
                },
                {
                    primary: img59,
                    hover: img60,
                    title: "Physical Education",
                    description: "Movement activities"
                },
                 {
                    primary: img62,
                    hover: img62,
                    title: "Ball Pool Fun",
                    description: "Indoor play area"
                },
            ]
        }
    ];

    const openLightbox = (categoryIdx, imageIdx) => {
        setSelectedCategory(categoryIdx);
        setSelectedImage(imageIdx);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        setSelectedCategory(null);
    };

    const navigateImage = (direction) => {
        if (selectedCategory === null || selectedImage === null) return;
        
        const currentCategory = galleryData[selectedCategory];
        const totalImages = currentCategory.images.length;
        
        if (direction === 'next') {
            setSelectedImage((selectedImage + 1) % totalImages);
        } else {
            setSelectedImage(selectedImage === 0 ? totalImages - 1 : selectedImage - 1);
        }
    };

    const GalleryImage = ({ image, categoryIdx, imageIdx }) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: imageIdx * 0.1 }}
                className="relative group cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => openLightbox(categoryIdx, imageIdx)}
            >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Primary Image */}
                    <motion.img
                        src={image.primary}
                        alt={image.title}
                        className="w-full h-full object-contain"
                        animate={{
                            opacity: isHovered ? 0 : 1,
                            scale: isHovered ? 1.1 : 1
                        }}
                        transition={{ duration: 0.4 }}
                    />
                    
                    {/* Hover Image */}
                    <motion.img
                        src={image.hover}
                        alt={image.title}
                        className="absolute inset-0 w-full h-full object-contain"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            scale: isHovered ? 1 : 1.1
                        }}
                        transition={{ duration: 0.4 }}
                    />

                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-[#0F2A4A]/90 via-[#0F2A4A]/50 to-transparent flex items-end"
                    >
                        <div className="p-6 w-full">
                            <h3 className="text-white text-xl font-bold mb-2">{image.title}</h3>
                            <p className="text-[#FDB913] text-sm">{image.description}</p>
                        </div>
                    </motion.div>

                    {/* Zoom Icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                            opacity: isHovered ? 1 : 0,
                            scale: isHovered ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-4 right-4 bg-[#FDB913] text-[#0F2A4A] p-3 rounded-full shadow-lg"
                    >
                        <ZoomIn className="w-6 h-6" />
                    </motion.div>

                    {/* Border Animation */}
                    <motion.div
                        className="absolute inset-0 border-4 border-[#FDB913] rounded-2xl"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ 
                            opacity: isHovered ? 1 : 0,
                            scale: isHovered ? 1 : 0.95
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </motion.div>
        );
    };

    return (
        <div className="min-h-screen pt-32 bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a4070] to-[#0F2A4A] text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute top-10 left-10 w-64 h-64 bg-[#FDB913] rounded-full blur-3xl"
                    ></motion.div>
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            rotate: [360, 180, 0]
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute bottom-10 right-10 w-96 h-96 bg-[#FDB913] rounded-full blur-3xl"
                    ></motion.div>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="inline-block mb-8"
                        >
                            <div className="bg-[#FDB913] rounded-full p-6 shadow-2xl">
                                <ZoomIn className="w-16 h-16 text-[#0F2A4A]" />
                            </div>
                        </motion.div>
                        
                        <h1 className="text-6xl font-bold mb-6">Gallery Media</h1>
                        
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "200px" }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="h-1 bg-[#FDB913] mx-auto mb-8"
                        ></motion.div>
                        
                        <p className="text-2xl text-[#FDB913] font-semibold mb-4">Capturing Precious Moments</p>
                        <p className="text-xl max-w-4xl mx-auto text-white/90 leading-relaxed">
                            A glimpse into the joyful learning experiences and memorable moments at Shishu Chaitanya
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Sections */}
            {galleryData.map((section, categoryIdx) => (
                <section key={categoryIdx} className={`py-20 ${categoryIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">{section.category}</h2>
                            <div className="w-32 h-1 bg-[#FDB913] mx-auto"></div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {section.images.map((image, imageIdx) => (
                                <GalleryImage
                                    key={imageIdx}
                                    image={image}
                                    categoryIdx={categoryIdx}
                                    imageIdx={imageIdx}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage !== null && selectedCategory !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute top-6 right-6 bg-[#FDB913] hover:bg-yellow-500 text-[#0F2A4A] p-3 rounded-full shadow-lg z-10"
                            onClick={closeLightbox}
                        >
                            <X className="w-8 h-8" />
                        </motion.button>

                        {/* Previous Button */}
                        <motion.button
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute left-6 bg-[#FDB913] hover:bg-yellow-500 text-[#0F2A4A] p-3 rounded-full shadow-lg z-10"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage('prev');
                            }}
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </motion.button>

                        {/* Next Button */}
                        <motion.button
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 100, opacity: 0 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute right-6 bg-[#FDB913] hover:bg-yellow-500 text-[#0F2A4A] p-3 rounded-full shadow-lg z-10"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage('next');
                            }}
                        >
                            <ChevronRight className="w-8 h-8" />
                        </motion.button>

                        {/* Image Container */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="max-w-5xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                                <div className="relative">
                                    <img
                                        src={galleryData[selectedCategory].images[selectedImage].hover}
                                        alt={galleryData[selectedCategory].images[selectedImage].title}
                                        className="w-full h-auto max-h-[70vh] object-contain bg-gray-100"
                                    />
                                    
                                    {/* Image Counter */}
                                    <div className="absolute top-4 left-4 bg-[#0F2A4A] text-white px-4 py-2 rounded-full font-bold">
                                        {selectedImage + 1} / {galleryData[selectedCategory].images.length}
                                    </div>
                                </div>
                                
                                <div className="p-8 bg-gradient-to-br from-[#0F2A4A] to-[#1a4070] text-white">
                                    <h3 className="text-3xl font-bold mb-3">
                                        {galleryData[selectedCategory].images[selectedImage].title}
                                    </h3>
                                    <p className="text-[#FDB913] text-lg">
                                        {galleryData[selectedCategory].images[selectedImage].description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A4A] via-[#1a4070] to-[#0F2A4A]"></div>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-[#FDB913] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FDB913] rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <ZoomIn className="w-20 h-20 mx-auto mb-8 text-[#FDB913]" />
                        </motion.div>
                        
                        <h2 className="text-5xl font-bold mb-6 text-white">Want to See More?</h2>
                        <div className="w-32 h-1 bg-[#FDB913] mx-auto mb-8"></div>
                        <p className="text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
                            Visit our campus to experience the vibrant learning environment firsthand!
                        </p>
                        
                        <motion.a
                            href="/play-school/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center bg-[#FDB913] hover:bg-yellow-500 text-[#0F2A4A] font-bold px-10 py-5 rounded-2xl transition-all shadow-2xl text-xl"
                        >
                            Schedule a Visit
                            <ChevronRight className="ml-2 w-6 h-6" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PlaySchoolGallery;