
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../frontend/admin/dashboard/dashboard.css'

const Pesanan =()=>{


    return (

        <>
                            <div class="container" style={{marginTop:'100px'}}>
                                <div class="body_pesanan d-md-flex align-items-center justify-content-between">
                                    <div class="box-1 mt-md-0 mt-5">
                                    
                                            <center>
                                            <div className='' >

                                            <div className='text-black' style={{marginLeft:"-150px"}}>Informasi Penerima</div>
                                            <div className='form-group m-2'>
                                           
                                            <input type="text" className='form-control' placeholder='Nama Lengkap'/>
                                            

                                            </div>
                                            <div className='form-group m-2'>
                                          
                                            <input type="text" className='form-control'  placeholder='No HP'/>

                                            </div>
                                            <div className='form-group m-2'>
                                          
                                          <input type="text" className='form-control'  placeholder='Alamat Lengkap'/>

                                          </div>
                                          <div className='form-group m-2'>
                                          
                                          <input type="text" className='form-control'  placeholder='Pilih Provinsi'/>

                                          </div>
                                          <div className='form-group m-2'>
                                          
                                          <input type="text" className='form-control'   placeholder='Pilih Kota'/>

                                          </div>
                                          <div className='form-group m-2'>
                                          
                                          <input type="text" className='form-control'  placeholder='Pilih Kecamatan'/>

                                          </div>
                                          <div className='form-group m-2'>
                                          
                                          <input type="text" className='form-control'  placeholder='Kode Pos'/>

                                          </div>

                                            
                                            </div>
                                            <div className='mt-4'></div>

                                        </center>

                                    </div>
                                    <div class=" box-2 d-flex flex-column h-100">
                                        <div class="mt-5">

                                        

                        <center>

                        <div className='mb-4 text-black'>Alamat</div>
                        </center>

                        <div>

                         <div class="card mb-4" >
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <h6 class="card-subtitle mb-2 text-muted text-black">Ita yulianda pane</h6>
                                <p class="card-text text-black">6281290002631</p>
                                <br/>
                                <a href="#" class="card-link text-black mb-2">JL.H. muala Ujung No 7 Rt 04/ Rw 08, Cengkareng......</a>
                                <a href="#" class="card-link text-black">Another link</a>
                            </div>
                            </div>

                        </div>
                        <center>
                        <button  type="button" className="login_masuk" style={{color:'white'}}><a href="/admin/dashboard">Lanjut</a></button>
                        </center>

                                        </div>
                                      
                                    </div>
                                    <span class="fas fa-times"></span>
                                </div>
                            </div>

        </>



    )


    
}


export default Pesanan;