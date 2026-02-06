import { Table, Badge, Progress, Text, Card, Group } from '@mantine/core'
import { IconMedal } from '@tabler/icons-react'
import { getTopCandidates } from '../data/mockData'

export default function Leaderboard() {
  const topCandidates = getTopCandidates()

  const getMedalColor = (rank) => {
    if (rank === 1) return 'yellow'
    if (rank === 2) return 'gray'
    if (rank === 3) return 'orange'
    return 'blue'
  }

  return (
    <Card shadow="sm" padding="lg">
      <Text size="xl" fw={700} mb="md">
        🏆 Top 10 Candidates
      </Text>
      
      <Table striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Rank</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>Experience</Table.Th>
            <Table.Th>Total Score</Table.Th>
            <Table.Th>Score Breakdown</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {topCandidates.map((candidate) => (
            <Table.Tr key={candidate.id}>
              <Table.Td>
                <Group gap="xs">
                  <IconMedal color={getMedalColor(candidate.rank)} />
                  <Text fw={500}>#{candidate.rank}</Text>
                </Group>
              </Table.Td>
              <Table.Td>
                <Text fw={600}>{candidate.name}</Text>
              </Table.Td>
              <Table.Td>
                <Badge color="blue" variant="light">
                  {candidate.years_experience} years
                </Badge>
              </Table.Td>
              <Table.Td>
                <Badge color="green" size="lg">
                  {candidate.total_score.toFixed(2)}
                </Badge>
              </Table.Td>
              <Table.Td>
                <div style={{ width: 200 }}>
                  <Text size="xs" c="dimmed">Crisis: {candidate.crisis_management_score}</Text>
                  <Progress value={candidate.crisis_management_score} color="red" size="xs" mb={4} />
                  
                  <Text size="xs" c="dimmed">Sustainability: {candidate.sustainability_score}</Text>
                  <Progress value={candidate.sustainability_score} color="green" size="xs" mb={4} />
                  
                  <Text size="xs" c="dimmed">Team: {candidate.team_motivation_score}</Text>
                  <Progress value={candidate.team_motivation_score} color="blue" size="xs" />
                </div>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Card>
  )
}