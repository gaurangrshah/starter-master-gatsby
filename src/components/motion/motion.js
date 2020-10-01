import React from "react"
import { Box, Button, Flex, Heading, Text, forwardRef } from "@chakra-ui/core"
import { motion } from "framer-motion"

import { Content } from "../chakra-ui"

// chakra
export const MotionBox = motion.custom(Box)
export const MotionButton = motion.custom(Button)

export const MotionFlex = motion.custom(Flex)
export const MotionHeading = motion.custom(Heading)
export const MotionText = motion.custom(Text)

// custom
export const MotionContent = motion.custom(Content)

export const MotionRefBox = forwardRef(({ ...props }, ref) => {
  console.log("❗️ref", ref, props)
  return <MotionBox ref={ref} {...props} />
})
