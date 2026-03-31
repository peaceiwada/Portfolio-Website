import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const GITHUB_USERNAME = 'peaceiwada'
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
      {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Iwada-Portfolio'
        }
      }
    )
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }
    
    const repos = await response.json()
    return NextResponse.json(repos)
    
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    return NextResponse.json(
      { error: 'Failed to fetch repositories' },
      { status: 500 }
    )
  }
}