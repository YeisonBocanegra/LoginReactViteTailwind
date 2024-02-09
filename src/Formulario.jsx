import React from 'react';
import { Typography, TextField, Button, Container, Grid, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Search, GetApp } from '@mui/icons-material';

function Formulario() {
  
  const rows = [
    { id: 1, tipoDocumento: 'Tipo 1', numeroDocumento: '123', fechaEmision: '01/01/2023', monto: '$100', proveedor: 'Proveedor 1', xml: 'XML 1', detalle: 'Detalle 1' },
    { id: 2, tipoDocumento: 'Tipo 2', numeroDocumento: '456', fechaEmision: '02/01/2023', monto: '$200', proveedor: 'Proveedor 2', xml: 'XML 2', detalle: 'Detalle 2' }, 
  ];

  return (
    <>        
    <Box sx={{ backgroundColor: '#f2f2f2', minHeight: '100vh' }}>        
      <Box sx={{ backgroundColor: '#cad1dd', height: '40px', color: 'black', textAlign: 'Left', lineHeight: '100px' }}>
        <Typography variant="h6">
          &nbsp;&nbsp;Documentos Pendientes
        </Typography>
      </Box>           
      <Box sx={{ margin: 2 }}>        
        <Container maxWidth="xl" sx={{ backgroundColor: '#3bb6ed', height: '40px', display: 'flex', alignItems: 'center', textAlign: 'left' }}>
          <Typography variant="subtitle1" fontWeight="bold">
            FILTROS DE DOCUMENTOS
          </Typography>
        </Container>
        <Container maxWidth="1700px" sx={{ backgroundColor: '#fff', p: 1 }}>                    
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Typography variant="subtitle1" display="inline" style={{ marginBottom: '6px', fontSize: '14px' }}>
                  Estatus
              </Typography>                
              <TextField select variant="outlined" margin="normal" required fullWidth id="estatus" name="estatus" SelectProps={{ native: true, style: { height: '35px', fontSize: '15px' } }} style={{ marginTop: '0px' }} InputLabelProps={{ shrink: true, }}>
                <option value="">Seleccione..</option>
                <option value="documentos_pendientes">Documentos Pendientes</option>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Typography variant="subtitle1" display="inline" style={{ marginBottom: '6px' , fontSize: '14px'}}>
                  Tipo de Documento
              </Typography> 
              <TextField select variant="outlined" margin="normal" required fullWidth id="tipo_documento" name="tipo_documento" SelectProps={{ native: true, style: { height: '35px', fontSize: '15px' } }} style={{ marginTop: '0px' }} InputLabelProps={{ shrink: true, }}>
                <option value="">Seleccione...</option>
                <option value="todos">Todos</option>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Typography variant="subtitle1" display="inline" style={{ marginBottom: '6px', fontSize: '14px'}}>
                Proveedor
              </Typography> 
              <TextField select variant="outlined" margin="normal" required fullWidth id="proveedor" name="proveedor" SelectProps={{ native: true, style: { height: '35px', fontSize: '15px' } }} style={{ marginTop: '0px' }} InputLabelProps={{ shrink: true, }}>
                <option value="">Seleccione...</option>
                <option value="todos">Todos</option>
              </TextField>
            </Grid>              
            <Grid item xs={12} sm={6} md={4} lg={4} >            
              <Typography variant="subtitle1" display="inline" style={{ marginBottom: '6px', fontSize: '14px'}} >
                Rango de Emisión
              </Typography>             
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField fullWidth variant="outlined" id="fechaInicio" name="fechaInicio" type="date" InputLabelProps={{ shrink: true, }} InputProps={{ style: { height: '35px', fontSize: '15px' }}}/>  
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth variant="outlined" id="fechaFin" name="fechaFin" type="date" InputLabelProps={{ shrink: true, }} InputProps={{ style: { height: '35px', fontSize: '15px' }}}/>  
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Typography variant="subtitle1" display="inline" style={{ marginBottom: '6px', fontSize: '14px'}}>
                Metadato
              </Typography> 
              <TextField select variant="outlined" margin="normal" required fullWidth id="metadato" name="metadato" SelectProps={{ native: true, style: { height: '35px', fontSize: '15px' } }} style={{ marginTop: '0px' }} InputLabelProps={{ shrink: true, }}>
                <option value="">Seleccione...</option>
                <option value="opcion">Opción 1</option>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Typography variant="subtitle1" display="inline" style={{ marginBottom: '6px', fontSize: '14px' }}>
                Valor
              </Typography> 
              <TextField select variant="outlined" margin="normal" required fullWidth id="valor" name="valor" SelectProps={{ native: true, style: { height: '35px', fontSize: '15px' } }} style={{ marginTop: '0px' }} InputLabelProps={{ shrink: true, }}>
                <option value="">Seleccione...</option>
                <option value="opcion">Opción 1</option>
              </TextField>
            </Grid>                                  
          </Grid>          
          <Grid container justifyContent="center" spacing={1} mt={2} alignItems="center">
            <Grid item>
              <Button variant="contained" color="primary" sx={{ backgroundColor: '#ccc', display: 'flex', justifyContent: 'center' }}>
                <Search />
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" sx={{ backgroundColor: '#3B82F6', display: 'flex', justifyContent: 'center' }}>
                <GetApp />
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ margin: 2 }}>
        <Container maxWidth="1700px" sx={{ backgroundColor: '#fff' }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Tipo de Documento</TableCell>
                  <TableCell>Nro de Documento</TableCell>
                  <TableCell>Fecha de Emisión</TableCell>
                  <TableCell>Monto</TableCell>
                  <TableCell>Proveedor</TableCell>
                  <TableCell>XML</TableCell>
                  <TableCell>Detalle</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.tipoDocumento}</TableCell>
                    <TableCell>{row.numeroDocumento}</TableCell>
                    <TableCell>{row.fechaEmision}</TableCell>
                    <TableCell>{row.monto}</TableCell>
                    <TableCell>{row.proveedor}</TableCell>
                    <TableCell>{row.xml}</TableCell>
                    <TableCell>{row.detalle}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </Box>    
    </>
  );
}

export default Formulario;
