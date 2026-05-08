// lib/use-github-contributions.js
import { useQuery } from '@tanstack/react-query'

const fetchContributions = async (username) => {
  const apiUrl = import.meta.env.REACT_APP_GITHUB_CONTRIBUTIONS_API_URL || 
    'https://github-contributions-api.jogruber.de'
  
  const response = await fetch(`${apiUrl}/v4/${username}?y=last`)
  
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub contributions')
  }
  
  const data = await response.json()
  return data.contributions
}

export const useGitHubContributions = (username) => {
  return useQuery({
    queryKey: ['github-contributions', username],
    queryFn: () => fetchContributions(username),
    staleTime: 86400000, // 24 hours
    gcTime: 86400000, // Keep in cache for 24 hours
    retry: 1,
  })
}