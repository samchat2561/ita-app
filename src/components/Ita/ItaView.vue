<template>
    <div class="container mt-3 pb-3 shadow p-0 rounded">
        <div class="container p-0 pt-2 mt-4 sarabun-regular">
            <!-- <div class="card-body p-2 text-white" style="background-color: #0C39B3;">
                <h3 class="card-title fw-medium text-center">การเปิดเผยข้อมูลสาธารณะ (Open Data Integrity and
                    Transparency
                    Assessment: OIT)</h3>
                <h6 class="card-text fw-light mt-3">มีวัตถุประสงค์เพื่อเก็บข้อมูลจากเว็บไซต์ของสถานศึกษา
                    โดยเป็นการประเมินระดับการเปิดเผยข้อมูลต่อสาธารณะของสถานศึกษา
                    เพื่อให้ประชาชนสามารถเข้าถึงข้อมูลในเว็บไซต์หลักของสถานศึกษาได้ ใน 2 ตัวชี้วัด ได้แก่</h6>
            </div> -->

            <div class="card shadow mx-2 p-2 text-white" style="background-color: #0C39B3;">
                <div class="card-header">
                    <h3 class="card-title fw-medium text-center">
                        การเปิดเผยข้อมูลสาธารณะ (Open Data Integrity and Transparency Assessment: OIT)
                    </h3>
                </div>
                <div class="card-body">
                    <h6 class="card-text text-white">มีวัตถุประสงค์เพื่อเก็บข้อมูลจากเว็บไซต์ของสถานศึกษา
                        โดยเป็นการประเมินระดับการเปิดเผยข้อมูลต่อสาธารณะของสถานศึกษา
                        เพื่อให้ประชาชนสามารถเข้าถึงข้อมูลในเว็บไซต์หลักของสถานศึกษาได้ ใน 2 ตัวชี้วัด ได้แก่
                    </h6>
                </div>
            </div>

            <div class="card-body p-2">
                <div class="fs-5 p-2 my-2 fw-lighter text-white rounded" style="background-color: #0C39B3;">
                    <h5 class="card-title my-1 fw-medium"><i class="bi bi-check2-square"></i> ตัวชี้วัดที่ 9
                        การเปิดเผยข้อมูล (01 - 029)
                    </h5>
                </div>
            </div>

            <div class="card shadow mx-2">
                <div class="card-header p-2">
                    <h6 class="card-title">
                        เป็นตัวชี้วัดที่มีวัตถุประสงค์เพื่อประเมินการเผยแพร่ข้อมูลที่เป็นปัจจุบันบนเว็บไซต์ของสถานศึกษา
                        เพื่อเปิดเผยข้อมูลต่างๆ ของสถานศึกษาให้สาธารณชนได้รับทราบใน 5 ประเด็นตัวชี้วัดย่อย คือ</h6>
                </div>
                <div class="card-body">
                    <h6 class="card-text text-danger">ตัวชี้วัดย่อยที่ 9.1 ข้อมูลพื้นฐาน (01 - 06)</h6>
                    <h6 class="card-text text-danger">ตัวชี้วัดย่อยที่ 9.2 การบริหารงาน (07 - 016)</h6>
                    <h6 class="card-text text-danger">ตัวชี้วัดย่อยที่ 9.3 การบริหารเงินงบประมาณ (017 - 022)</h6>
                    <h6 class="card-text text-danger">ตัวชี้วัดย่อยที่ 9.4 การบริหารและพัฒนาทรัพยากรบุคคล (023 - 025)
                    </h6>
                    <h6 class="card-text text-danger">ตัวชี้วัดย่อยที่ 9.5 การส่งเสริมความโปร่งใส (026 - 029)</h6>
                </div>
            </div>

            <div class="card-body mt-3 p-2">
                <div class="fs-5 p-2 my-2 fw-lighter text-white rounded" style="background-color: #0C39B3;">
                    <h5 class="card-title fw-medium"><i class="bi bi-check2-square"></i> ตัวชี้วัดที่ 10
                        การป้องกันการทุจริต (030 - 037)
                    </h5>
                </div>
            </div>

            <div class="card shadow mx-2">
                <div class="card-header p-2">
                    <h6 class="card-title">
                        เป็นตัวชี้วัดที่มีวัตถุประสงค์เพื่อประเมินการเผยแพร่ข้อมูลที่เป็นปัจจุบันบนเว็บไซต์ของสถานศึกษา
                        เพื่อเปิดเผยข้อมูลต่างๆ ของสถานศึกษาให้สาธารณชนได้รับทราบใน 5 ประเด็นตัวชี้วัดย่อย คือ</h6>
                </div>
                <div class="card-body">
                    <h6 class="card-text text-danger">ตัวชี้วัดย่อยที่ 10.1 การดําเนินการเพื่อป้องกันการทุจริต (030 -
                        035)
                    </h6>
                    <h6 class="card-text text-danger">ตัวชี้วัดย่อยที่ 10.2 มาตรการภายในเพื่อป้องกันการทุจริต (036 -
                        037)
                    </h6>
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-3 pb-2 shadow p-0 rounded">
        <div class="container p-0 mt-4 sarabun-regular">
            <div v-for="item in indicators9" :key="item.id">
                <div class="fs-4 p-2 text-center text-white" style="background-color: #0C39B3;">
                    {{ item.description }}
                </div>
            </div>
        </div>

        <div class="container mt-2 sarabun-regular">
            <div v-for="item in sub_indicators" :key="item.id">
                <div class="fs-5 p-2 fw-lighter text-white rounded" style="background-color: #801905;">
                    {{ item.description }}
                </div>
                <div class="fs-5 fw-semibold mt-2">
                    {{ item.id }}. {{ item.title }}
                </div>
            </div>
        </div>

        <div class="container mt-4 sarabun-regular">
            <table class="table table-striped table-hover">
                <thead>
                    <tr class="text-white fw-lighter table-primary" style="background-color: #801905;">
                        <td class="p-2">ข้อ</td>
                        <td class="p-2">ข้อมูล</td>
                        <td class="p-2">รายละเอียดองค์ประกอบ</td>
                        <td class="p-2">การเผยแพร่ข้อมูล</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in subsections" :key="item.id">
                        <td>{{ item.ข้อ }}</td>
                        <td>{{ item.ข้อมูล }}</td>
                        <td>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล1 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล2 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล3 }}</h6>
                        </td>
                        <td><a v-bind:href="item.link" target="_blank" class="link-underline-light">รายละเอียด</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="container mt-4 sarabun-regular">
            <div v-for="item in sub_indicators2" :key="item.id">
                <div class="fs-5 p-2 fw-lighter text-white rounded" style="background-color: #801905;">
                    {{ item.description }}
                </div>
                <div class="fs-5 fw-semibold mt-2">
                    {{ item.id }}. {{ item.title }}
                </div>
            </div>
        </div>

        <div class="container mt-4 sarabun-regular">
            <table class="table table-striped table-hover">
                <thead>
                    <tr class="text-white fw-lighter table-primary" style="background-color: #801905;">
                        <td class="p-2">ข้อ</td>
                        <td class="p-2">ข้อมูล</td>
                        <td class="p-2">รายละเอียดองค์ประกอบ</td>
                        <td class="p-2">การเผยแพร่ข้อมูล</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in subsections2" :key="item.id">
                        <td>{{ item.ข้อ }}</td>
                        <td>{{ item.ข้อมูล }}</td>
                        <td>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล1 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล2 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล3 }}</h6>
                        </td>
                        <td><a v-bind:href="item.link" target="_blank" class="link-underline-light">รายละเอียด</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="container mt-4 sarabun-regular">
            <div v-for="item in sub_indicators3" :key="item.id">
                <div class="fs-5 fw-semibold mt-2">
                    {{ item.id }}. {{ item.title }}
                </div>
            </div>
        </div>

        <div class="container mt-4 sarabun-regular">
            <table class="table table-striped table-hover">
                <thead>
                    <tr class="text-white fw-lighter table-primary" style="background-color: #801905;">
                        <td class="p-2">ข้อ</td>
                        <td class="p-2">ข้อมูล</td>
                        <td class="p-2">รายละเอียดองค์ประกอบ</td>
                        <td class="p-2">การเผยแพร่ข้อมูล</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in subsections3" :key="item.id">
                        <td>{{ item.ข้อ }}</td>
                        <td>{{ item.ข้อมูล }}</td>
                        <td>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล1 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล2 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล3 }}</h6>
                        </td>
                        <td><a v-bind:href="item.link" target="_blank" class="link-underline-light">รายละเอียด</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="container mt-4 sarabun-regular">
            <div v-for="item in sub_indicators4" :key="item.id">
                <div class="fs-5 fw-semibold mt-2">
                    {{ item.id }}. {{ item.title }}
                </div>
            </div>
        </div>

        <div class="container mt-4 sarabun-regular">
            <table class="table table-striped table-hover">
                <thead>
                    <tr class="text-white fw-lighter table-primary" style="background-color: #801905;">
                        <td class="p-2">ข้อ</td>
                        <td class="p-2">ข้อมูล</td>
                        <td class="p-2">รายละเอียดองค์ประกอบ</td>
                        <td class="p-2">การเผยแพร่ข้อมูล</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in subsections4" :key="item.id">
                        <td>{{ item.ข้อ }}</td>
                        <td>{{ item.ข้อมูล }}</td>
                        <td>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล1 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล2 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล3 }}</h6>
                        </td>
                        <td><a v-bind:href="item.link" target="_blank" class="link-underline-light">รายละเอียด</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="container mt-4 sarabun-regular">
            <div v-for="item in sub_indicators5" :key="item.id">
                <div class="fs-5 fw-semibold mt-2">
                    {{ item.id }}. {{ item.title }}
                </div>
            </div>
        </div>

        <div class="container mt-4 sarabun-regular">
            <table class="table table-striped table-hover">
                <thead>
                    <tr class="text-white fw-lighter table-primary" style="background-color: #801905;">
                        <td class="p-2">ข้อ</td>
                        <td class="p-2">ข้อมูล</td>
                        <td class="p-2">รายละเอียดองค์ประกอบ</td>
                        <td class="p-2">การเผยแพร่ข้อมูล</td>
                    </tr>
                </thead>
                <tbody class="table-group-divider">

                    <tr v-for="item in subsections5" :key="item.id">
                        <td>{{ item.ข้อ }}</td>
                        <td>{{ item.ข้อมูล }}</td>
                        <td>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล1 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล2 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล3 }}</h6>
                        </td>
                        <td><a v-bind:href="item.link" target="_blank" class="link-underline-light">รายละเอียด</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="container mt-4 sarabun-regular">
            <div v-for="item in sub_indicators6" :key="item.id">
                <div class="fs-5 p-2 fw-lighter text-white rounded" style="background-color: #801905;">
                    {{ item.description }}
                </div>
                <div class="fs-5 fw-semibold mt-2">
                    {{ item.id }}. {{ item.title }}
                </div>
            </div>
        </div>

        <div class="container mt-4 sarabun-regular">
            <table class="table table-striped table-hover">
                <thead>
                    <tr class="text-white fw-lighter table-primary" style="background-color: #801905;">
                        <td class="p-2">ข้อ</td>
                        <td class="p-2">ข้อมูล</td>
                        <td class="p-2">รายละเอียดองค์ประกอบ</td>
                        <td class="p-2">การเผยแพร่ข้อมูล</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in subsections6" :key="item.id">
                        <td>{{ item.ข้อ }}</td>
                        <td>{{ item.ข้อมูล }}</td>
                        <td>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล1 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล2 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล3 }}</h6>
                        </td>
                        <td><a v-bind:href="item.link" target="_blank" class="link-underline-light">รายละเอียด</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="container mt-4 sarabun-regular">
            <div v-for="item in sub_indicators7" :key="item.id">
                <div class="fs-5 fw-semibold mt-2">
                    {{ item.id }}. {{ item.title }}
                </div>
            </div>
        </div>

        <div class="container mt-4 sarabun-regular">
            <table class="table table-striped table-hover">
                <thead>
                    <tr class="text-white fw-lighter table-primary" style="background-color: #801905;">
                        <td class="p-2">ข้อ</td>
                        <td class="p-2">ข้อมูล</td>
                        <td class="p-2">รายละเอียดองค์ประกอบ</td>
                        <td class="p-2">การเผยแพร่ข้อมูล</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in subsections7" :key="item.id">
                        <td>{{ item.ข้อ }}</td>
                        <td>{{ item.ข้อมูล }}</td>
                        <td>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล1 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล2 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล3 }}</h6>
                        </td>
                        <td><a v-bind:href="item.link" target="_blank" class="link-underline-light">รายละเอียด</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="container mt-4 sarabun-regular">
            <div v-for="item in sub_indicators8" :key="item.id">
                <div class="fs-5 p-2 fw-lighter text-white rounded" style="background-color: #801905;">
                    {{ item.description }}
                </div>
                <div class="fs-5 fw-semibold mt-2">
                    {{ item.id }}. {{ item.title }}
                </div>
            </div>
        </div>

        <div class="container mt-4 sarabun-regular">
            <table class="table table-striped table-hover">
                <thead>
                    <tr class="text-white fw-lighter table-primary" style="background-color: #801905;">
                        <td class="p-2">ข้อ</td>
                        <td class="p-2">ข้อมูล</td>
                        <td class="p-2">รายละเอียดองค์ประกอบ</td>
                        <td class="p-2">การเผยแพร่ข้อมูล</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in subsections8" :key="item.id">
                        <td>{{ item.ข้อ }}</td>
                        <td>{{ item.ข้อมูล }}</td>
                        <td>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล1 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล2 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล3 }}</h6>
                        </td>
                        <td><a v-bind:href="item.link" target="_blank" class="link-underline-light">รายละเอียด</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="container mt-4 sarabun-regular">
            <div v-for="item in sub_indicators9" :key="item.id">
                <div class="fs-5 p-2 fw-lighter text-white rounded" style="background-color: #801905;">
                    {{ item.description }}
                </div>
                <div class="fs-5 fw-semibold mt-2">
                    {{ item.id }}. {{ item.title }}
                </div>
            </div>
        </div>

        <div class="container mt-4 sarabun-regular">
            <table class="table table-striped table-hover">
                <thead>
                    <tr class="text-white fw-lighter table-primary" style="background-color: #801905;">
                        <td class="p-2">ข้อ</td>
                        <td class="p-2">ข้อมูล</td>
                        <td class="p-2">รายละเอียดองค์ประกอบ</td>
                        <td class="p-2">การเผยแพร่ข้อมูล</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in subsections9" :key="item.id">
                        <td>{{ item.ข้อ }}</td>
                        <td>{{ item.ข้อมูล }}</td>
                        <td>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล1 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล2 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล3 }}</h6>
                        </td>
                        <td><a v-bind:href="item.link" target="_blank" class="link-underline-light">รายละเอียด</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="container mt-4 sarabun-regular">
            <div v-for="item in sub_indicators10" :key="item.id">
                <div class="fs-5 fw-semibold mt-2">
                    {{ item.id }}. {{ item.title }}
                </div>
            </div>
        </div>

        <div class="container mt-4 sarabun-regular">
            <table class="table table-striped table-hover">
                <thead>
                    <tr class="text-white fw-lighter table-primary" style="background-color: #801905;">
                        <td class="p-2">ข้อ</td>
                        <td class="p-2">ข้อมูล</td>
                        <td class="p-2">รายละเอียดองค์ประกอบ</td>
                        <td class="p-2">การเผยแพร่ข้อมูล</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in subsections10" :key="item.id">
                        <td>{{ item.ข้อ }}</td>
                        <td>{{ item.ข้อมูล }}</td>
                        <td>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล1 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล2 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล3 }}</h6>
                        </td>
                        <td><a v-bind:href="item.link" target="_blank" class="link-underline-light">รายละเอียด</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="container mt-3 pb-2 shadow p-0 rounded">
        <div class="container p-0 mt-4 sarabun-regular">
            <div v-for="item in indicators10" :key="item.id">
                <div class="fs-4 p-2 text-center text-white" style="background-color: #0C39B3;">
                    {{ item.description }}
                </div>
            </div>
        </div>

        <div class="container mt-2 sarabun-regular">
            <div v-for="item in sub_indicators11" :key="item.id">
                <div class="fs-5 p-2 fw-lighter text-white rounded" style="background-color: #801905;">
                    {{ item.description }}
                </div>
                <div class="fs-5 fw-semibold mt-2">
                    {{ item.id }}. {{ item.title }}
                </div>
            </div>
        </div>

        <div class="container mt-4 sarabun-regular">
            <table class="table table-striped table-hover">
                <thead>
                    <tr class="text-white fw-lighter table-primary" style="background-color: #801905;">
                        <td class="p-2">ข้อ</td>
                        <td class="p-2">ข้อมูล</td>
                        <td class="p-2">รายละเอียดองค์ประกอบ</td>
                        <td class="p-2">การเผยแพร่ข้อมูล</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in subsections11" :key="item.id">
                        <td>{{ item.ข้อ }}</td>
                        <td>{{ item.ข้อมูล }}</td>
                        <td>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล1 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล2 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล3 }}</h6>
                        </td>
                        <td><a v-bind:href="item.link" target="_blank" class="link-underline-light">รายละเอียด</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="container mt-4 sarabun-regular">
            <div v-for="item in sub_indicators12" :key="item.id">
                <div class="fs-5 fw-semibold mt-2">
                    {{ item.id }}. {{ item.title }}
                </div>
            </div>
        </div>

        <div class="container mt-4 sarabun-regular">
            <table class="table table-striped table-hover">
                <thead>
                    <tr class="text-white fw-lighter table-primary" style="background-color: #801905;">
                        <td class="p-2">ข้อ</td>
                        <td class="p-2">ข้อมูล</td>
                        <td class="p-2">รายละเอียดองค์ประกอบ</td>
                        <td class="p-2">การเผยแพร่ข้อมูล</td>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="item in subsections12" :key="item.id">
                        <td>{{ item.ข้อ }}</td>
                        <td>{{ item.ข้อมูล }}</td>
                        <td>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล1 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล2 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล3 }}</h6>
                        </td>
                        <td><a v-bind:href="item.link" target="_blank" class="link-underline-light">รายละเอียด</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="container mt-4 sarabun-regular">
            <div v-for="item in sub_indicators13" :key="item.id">
                <div class="fs-5 p-2 fw-lighter text-white rounded" style="background-color: #801905;">
                    {{ item.description }}
                </div>
                <div class="fs-5 fw-semibold mt-2">
                    {{ item.id }}. {{ item.title }}
                </div>
            </div>
        </div>

        <div class="container mt-4 sarabun-regular">
            <table class="table table-striped table-hover">
                <thead>
                    <tr class="text-white fw-lighter table-primary" style="background-color: #801905;">
                        <td class="p-2">ข้อ</td>
                        <td class="p-2">ข้อมูล</td>
                        <td class="p-2">รายละเอียดองค์ประกอบ</td>
                        <td class="p-2">การเผยแพร่ข้อมูล</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in subsections13" :key="item.id">
                        <td>{{ item.ข้อ }}</td>
                        <td>{{ item.ข้อมูล }}</td>
                        <td>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล1 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล2 }}</h6>
                            <h6>{{ item.องค์ประกอบด้านข้อมูล3 }}</h6>
                        </td>
                        <td><a v-bind:href="item.link" target="_blank" class="link-underline-light">รายละเอียด</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const indicators9 = ref([])
const indicators10 = ref([])

const sub_indicators = ref([])
const sub_indicators2 = ref([])
const sub_indicators3 = ref([])
const sub_indicators4 = ref([])
const sub_indicators5 = ref([])
const sub_indicators6 = ref([])
const sub_indicators7 = ref([])
const sub_indicators8 = ref([])
const sub_indicators9 = ref([])
const sub_indicators10 = ref([])
const sub_indicators11 = ref([])
const sub_indicators12 = ref([])
const sub_indicators13 = ref([])

const subsections = ref([])
const subsections2 = ref([])
const subsections3 = ref([])
const subsections4 = ref([])
const subsections5 = ref([])
const subsections6 = ref([])
const subsections7 = ref([])
const subsections8 = ref([])
const subsections9 = ref([])
const subsections10 = ref([])
const subsections11 = ref([])
const subsections12 = ref([])
const subsections13 = ref([])

const loading = ref(false);
const error = ref(null);

// ตัวชี้วัดที่ 9 การเปิดเผยข้อมูล ประกอบด้วย 5 ตัวชี้วัดย่อย (29 ข้อมูล) ดังนี้
const fetchData = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/indicators9');
        indicators9.value = response.data;
        console.log(indicators9.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData)

const fetchData10 = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/indicators10');
        indicators10.value = response.data;
        console.log(indicators10.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData10)

// ตัวชี้วัดย่อยที่ 9.1 ข้อมูลพื้นฐาน (O1 - O6)
// 1. ข้อมูลพื้นฐาน
const fetchData2 = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/sub_indicators');
        sub_indicators.value = response.data;
        console.log(sub_indicators.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData2)

// ตัวชี้วัดย่อยที่ 9.2 การบริหารงาน ได้แก่ แผนดําเนินงาน การปฏิบัติงาน และการให้บริการ (O7 – O16)
// 2. การบริหารงาน
const fetchData2b = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/sub_indicators2');
        sub_indicators2.value = response.data;
        console.log(sub_indicators2.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData2b)

const fetchData2c = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/sub_indicators3');
        sub_indicators3.value = response.data;
        console.log(sub_indicators3.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData2c)

const fetchData2d = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/sub_indicators4');
        sub_indicators4.value = response.data;
        console.log(sub_indicators4.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData2d)

const fetchData2e = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/sub_indicators5');
        sub_indicators5.value = response.data;
        console.log(sub_indicators5.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData2e)

const fetchData2f = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/sub_indicators6');
        sub_indicators6.value = response.data;
        console.log(sub_indicators6.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData2f)

const fetchData2g = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/sub_indicators7');
        sub_indicators7.value = response.data;
        console.log(sub_indicators7.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData2g)

const fetchData2h = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/sub_indicators8');
        sub_indicators8.value = response.data;
        console.log(sub_indicators8.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData2h)

const fetchData2i = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/sub_indicators9');
        sub_indicators9.value = response.data;
        console.log(sub_indicators9.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData2i)

const fetchData2j = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/sub_indicators10');
        sub_indicators10.value = response.data;
        console.log(sub_indicators10.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData2j)

const fetchData2k = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/sub_indicators11');
        sub_indicators11.value = response.data;
        console.log(sub_indicators11.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData2k)

const fetchData2l = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/sub_indicators12');
        sub_indicators12.value = response.data;
        console.log(sub_indicators12.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData2l)

const fetchData2m = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/sub_indicators13');
        sub_indicators13.value = response.data;
        console.log(sub_indicators13.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData2m)

//ข้อมูลในตาราง 1. ข้อมูลพื้นฐาน
const fetchData3 = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/subsections');
        subsections.value = response.data;
        console.log(subsections.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData3)

//ข้อมูลในตาราง 2. การบริหารงาน
const fetchData3b = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/subsections2');
        subsections2.value = response.data;
        console.log(subsections2.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData3b)

const fetchData3c = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/subsections3');
        subsections3.value = response.data;
        console.log(subsections3.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData3c)

const fetchData3d = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/subsections4');
        subsections4.value = response.data;
        console.log(subsections4.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData3d)

const fetchData3e = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/subsections5');
        subsections5.value = response.data;
        console.log(subsections5.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData3e)

const fetchData3f = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/subsections6');
        subsections6.value = response.data;
        console.log(subsections6.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData3f)

const fetchData3g = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/subsections7');
        subsections7.value = response.data;
        console.log(subsections7.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData3g)

const fetchData3h = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/subsections8');
        subsections8.value = response.data;
        console.log(subsections8.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData3h)

const fetchData3i = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/subsections9');
        subsections9.value = response.data;
        console.log(subsections9.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData3i)

const fetchData3j = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/subsections10');
        subsections10.value = response.data;
        console.log(subsections10.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData3j)

const fetchData3k = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/subsections11');
        subsections11.value = response.data;
        console.log(subsections11.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData3k)

const fetchData3l = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/subsections12');
        subsections12.value = response.data;
        console.log(subsections12.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData3l)

const fetchData3m = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await axios.get('http://localhost:3000/subsections13');
        subsections13.value = response.data;
        console.log(subsections13.value)
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
    }
}
onMounted(fetchData3m)

// onMounted(async () => {
//     loading.value = true;
//     error.value = null;
//     try {
//         await axios.get(`http://localhost:3000/subsections`).then((response) => {
//             allindicators.value = response.data
//             console.log(allindicators.value)
//         })
//     } catch (err) {
//         error.value = err;
//     } finally {
//         loading.value = false;
//     }
// })

</script>

<style lang="scss" scoped></style>