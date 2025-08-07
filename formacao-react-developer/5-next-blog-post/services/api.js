import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://tyehejatykpzzcvbhbhh.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5ZWhlamF0eWtwenpjdmJoYmhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2MDM5MDAsImV4cCI6MjA3MDE3OTkwMH0.0fjFKEwPZjJ37qEu4Q9JkY7Q0e9pHL9WFZhqed4cI_4',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5ZWhlamF0eWtwenpjdmJoYmhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2MDM5MDAsImV4cCI6MjA3MDE3OTkwMH0.0fjFKEwPZjJ37qEu4Q9JkY7Q0e9pHL9WFZhqed4cI_4',
  },
});
