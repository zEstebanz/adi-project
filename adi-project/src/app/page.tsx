import Image from "next/image";
import Link from "next/link";
import { CalendarToday, Phone, Mail } from "@mui/icons-material";
import { Button, Card, CardContent, CardHeader, CardActions, Typography, Container, Box } from "@mui/material";

const HomePage: React.FC = () => {
  return (
    <Box className="flex flex-col min-h-screen">
      {/* Header */}
      <Box component="header" sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: 4 }}>
        <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Image src="/placeholder.svg" alt="Logo Municipal" width={40} height={40} className="rounded-full" />
            <Typography variant="h4" fontWeight="bold">Municipalidad</Typography>
          </Box>
          <nav>
            <Box component="ul" sx={{ display: 'flex', gap: 4, listStyle: 'none', m: 0, p: 0 }}>
              <li><Link href="#" className="hover:underline">Inicio</Link></li>
              <li><Link href="#" className="hover:underline">Servicios</Link></li>
              <li><Link href="#" className="hover:underline">Noticias</Link></li>
              <li><Link href="#" className="hover:underline">Contacto</Link></li>
            </Box>
          </nav>
        </Container>
      </Box>

      {/* Main */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Box sx={{ bgcolor: 'primary.dark', color: 'primary.contrastText', py: 8, textAlign: 'center' }}>
          <Container>
            <Typography variant="h2" fontWeight="bold" mb={4}>Bienvenidos a Nuestra Comunidad</Typography>
            <Typography variant="h5" mb={8}>Juntos construimos un futuro mejor para todos</Typography>
            <Button variant="contained" size="large">Conoce Nuestros Servicios</Button>
          </Container>
        </Box>

        {/* Nuestro Compromiso */}
        <Box sx={{ py: 8, bgcolor: 'background.default' }}>
          <Container>
            <Typography variant="h3" fontWeight="bold" textAlign="center" mb={8} className="text-black">Nuestro Compromiso</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
              <Card>
                <CardHeader title="Transparencia" />
                <CardContent>
                  <Typography>Nos comprometemos a ser abiertos y honestos en todas nuestras acciones y decisiones.</Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader title="Participación" />
                <CardContent>
                  <Typography>Fomentamos la participación activa de todos los ciudadanos en el desarrollo de nuestra comunidad.</Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader title="Innovación" />
                <CardContent>
                  <Typography>Buscamos constantemente nuevas formas de mejorar nuestros servicios y la calidad de vida de nuestros ciudadanos.</Typography>
                </CardContent>
              </Card>
            </Box>
          </Container>
        </Box>

        {/* Noticias y Eventos */}
        <Box sx={{ py: 8, bgcolor: 'grey.200' }}>
          <Container>
            <Typography variant="h3" fontWeight="bold" textAlign="center" mb={8}>Noticias y Eventos</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
              <Card>
                <CardHeader title="Inauguración del Nuevo Parque Comunitario" />
                <CardContent>
                  <Typography mb={4}>Este sábado inauguramos nuestro nuevo espacio verde para el disfrute de todas las familias.</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                    <CalendarToday sx={{ mr: 1 }} />
                    <Typography>15 de Octubre, 2024</Typography>
                  </Box>
                </CardContent>
              </Card>
              <Card>
                <CardHeader title="Programa de Reciclaje Ampliado" />
                <CardContent>
                  <Typography mb={4}>Ampliamos nuestro programa de reciclaje para incluir más materiales y facilitar la participación ciudadana.</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                    <CalendarToday sx={{ mr: 1 }} />
                    <Typography>1 de Noviembre, 2024</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Container>
        </Box>

        {/* Contact Section */}
        <Box sx={{ py: 8, bgcolor: 'background.default', textAlign: 'center' }}>
          <Container>
            <Typography variant="h3" fontWeight="bold" mb={8} className="text-black">Estamos Aquí para Ti</Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center', gap: 8 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Phone sx={{ mr: 1, color: 'primary.main' }} />
                <Typography className="text-black">0800-555-MUNI</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Mail sx={{ mr: 1, color: 'primary.main' }} />
                <Typography className="text-black">contacto@municipalidad.gob</Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: 8 }}>
        <Container sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography mb={{ xs: 4, md: 0 }}>2024 Municipalidad</Typography>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Link href="#" className="hover:underline">Facebook</Link>
            <Link href="#" className="hover:underline">Twitter</Link>
            <Link href="#" className="hover:underline">Instagram</Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage;
