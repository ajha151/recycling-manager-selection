import { Card, Text } from '@mantine/core'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { getTopCandidates } from '../data/mockData'

export default function SkillHeatmap() {
  const topCandidates = getTopCandidates()

  const chartData = topCandidates.map(candidate => ({
    name: candidate.name.split(' ')[1], // Last name only for readability
    Crisis: candidate.crisis_management_score,
    Sustainability: candidate.sustainability_score,
    Team: candidate.team_motivation_score,
  }))

  return (
    <Card shadow="sm" padding="lg">
      <Text size="xl" fw={700} mb="md">
        📊 Top 10 Skills Comparison
      </Text>
      
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Crisis" fill="#ff6b6b" />
          <Bar dataKey="Sustainability" fill="#51cf66" />
          <Bar dataKey="Team" fill="#339af0" />
        </BarChart>
      </ResponsiveContainer>

      <Text size="sm" c="dimmed" mt="md">
        Comparing crisis management, sustainability knowledge, and team motivation scores across top candidates.
      </Text>
    </Card>
  )
}