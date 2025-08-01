<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark shadow sarabun-regular fs-6 sticky-top" style="background:#801905;">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img src="https://itas.nacc.go.th/Content/img/ITALogo1.png" width="60rem" alt="">ITA-วิทยาลัยเทคนิคตราด</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item"><router-link to="/" class="nav-link active" aria-current="page"><i class="bi bi-house-fill m-1"></i>หน้าแรก</router-link></li>
          <li class="nav-item"><router-link to="/about" class="nav-link"><i class="bi bi-bank2 m-1"></i>เกี่ยวกับเรา</router-link></li>
          <li class="nav-item dropdown">
            <router-link to="" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-person-video3 m-1"></i>คุณธรรมและความโปร่งใส (ITA)
            </router-link>
            <ul class="dropdown-menu">
              <li><router-link :to="{name:'itas'}" class="dropdown-item">ประเมินคุณธรรมและความโปร่งใส (ITA) ประจำปี พ.ศ.2568</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="https://www.ovecita.in.th/" target="_blank">ระบบประเมิน ITA-VEC สอศ.</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <router-link to="" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-globe2 m-1"></i>เว็บไซต์ที่เกี่ยวข้อง
            </router-link>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="https://www.trattc.ac.th/app" target="_blank">วิทยาลัยเทคนิคตราด</a></li>
              <li><a class="dropdown-item" href="https://www.trattc.ac.th/v1/wishes" target="_blank">ลงนามถวายพระพร</a></li>
              <li><a class="dropdown-item" href="http://www.trattc.ac.th:3009/products/add" target="_blank">ถวายสัตย์ปฏิญาณ</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="https://www.vec.go.th/" target="_blank">สำนักงานคณะกรรมการฯ</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>