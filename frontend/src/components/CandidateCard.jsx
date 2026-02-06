import { Card, Text, Badge, Group, Stack, RingProgress } from '@mantine/core'
import { IconBriefcase } from '@tabler/icons-react'

export default function CandidateCard({ candidate }) {
  const avgScore = candidate.total_score

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mb="xs">
        <Text fw={600} size="lg">
          {candidate.name}
        </Text>
        <Badge color={candidate.rank <= 10 ? 'green' : 'gray'}>
          Rank #{candidate.rank}
        </Badge>
      </Group>

      <Group gap="xs" mb="md">
        <IconBriefcase size={16} />
        <Text size="sm" c="dimmed">
          {candidate.years_experience} years experience
        </Text>
      </Group>

      <Stack gap="xs" mb="md">
        <Group justify="space-between">
          <Text size="sm">Crisis Management</Text>
          <Badge color="red" variant="light">{candidate.crisis_management_score}</Badge>
        </Group>
        <Group justify="space-between">
          <Text size="sm">Sustainability</Text>
          <Badge color="green" variant="light">{candidate.sustainability_score}</Badge>
        </Group>
        <Group justify="space-between">
          <Text size="sm">Team Motivation</Text>
          <Badge color="blue" variant="light">{candidate.team_motivation_score}</Badge>
        </Group>
      </Stack>

      <Group justify="center" mt="md">
        <RingProgress
          size={100}
          thickness={8}
          sections={[
            { value: (avgScore / 100) * 100, color: avgScore >= 85 ? 'green' : avgScore >= 70 ? 'yellow' : 'red' }
          ]}
          label={
            <Text size="xl" fw={700} ta="center">
              {avgScore.toFixed(1)}
            </Text>
          }
        />
      </Group>

      <Text size="xs" c="dimmed" mt="sm">
        <strong>Skills:</strong> {candidate.skills.slice(0, 3).join(', ')}
        {candidate.skills.length > 3 && ` +${candidate.skills.length - 3} more`}
      </Text>
    </Card>
  )
}