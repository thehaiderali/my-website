// components/GitHubContributionsSection.jsx
import { Suspense } from "react"
import { TooltipProvider } from "@radix-ui/react-tooltip"
import {
  GitHubContributions,
  GitHubContributionsFallback,
} from "@/components/github-contributions"
import { cn } from "@/lib/utils"

const GITHUB_USERNAME = "thehaiderali"
const GITHUB_PROFILE_URL = "https://github.com/thehaiderali"

const getContributionsPromise = (username) => {
  const apiUrl = import.meta.env.REACT_APP_GITHUB_CONTRIBUTIONS_API_URL || 
    "https://github-contributions-api.jogruber.de"
  
  return fetch(`${apiUrl}/v4/${username}?y=last`)
    .then(res => res.json())
    .then(data => data.contributions)
}

const contributionsPromise = getContributionsPromise(GITHUB_USERNAME)

export default function GitHubContributionsSection() {
  return (
    <TooltipProvider delayDuration={0}>
      <Suspense fallback={<GitHubContributionsFallback />}>
        <GitHubContributions
         className={cn(
           '**:data-[level="0"]:fill-[#eff2f5] dark:**:data-[level="0"]:fill-[#151b23]',
          '**:data-[level="1"]:fill-[#b6e3ff] dark:**:data-[level="1"]:fill-[#0c2d6b]',
          '**:data-[level="2"]:fill-[#54aeff] dark:**:data-[level="2"]:fill-[#1158c7]',
          '**:data-[level="3"]:fill-[#0969da] dark:**:data-[level="3"]:fill-[#58a6ff]',
          '**:data-[level="4"]:fill-[#0a3069] dark:**:data-[level="4"]:fill-[#cae8ff]'
        )}
          contributions={contributionsPromise}
          githubProfileUrl={GITHUB_PROFILE_URL}
        />
      </Suspense>
    </TooltipProvider>
  )
}