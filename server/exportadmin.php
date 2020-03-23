<?php 
    include("consolelog.php");
    include("server.php");
    include("Classes/PHPExcel.php");
    $objexcel = new PHPExcel;
    $objexcel->setActiveSheetIndex(0);
    $sheet = $objexcel->getActiveSheet()->setTitle("user");

    $count = 1;
    $sheet->setCellValue('A'.$count, "id");
    $sheet->setCellValue('B'.$count, "Fullname");
    $sheet->setCellValue('C'.$count, "Username");
    $sheet->setCellValue('D'.$count, "Email");
    $sheet->setCellValue('E'.$count, "PhoneNumber");
    $sheet->setCellValue('F'.$count, "Title");
    $sheet->setCellValue('G'.$count, "Company");
    $sheet->setCellValue('H'.$count, "Address");
    $sheet->setCellValue('I'.$count, "Status");
    $sql1="SELECT * FROM admin";
    $result=mysqli_query($conn,$sql1);
    if(mysqli_num_rows($result)){
        while($row = mysqli_fetch_assoc($result)){
            $count++;
            $sheet->setCellValue('A'.$count, $row["id"]);
            $sheet->setCellValue('B'.$count, $row["fullname"]);
            $sheet->setCellValue('C'.$count, $row["username"]);
            $sheet->setCellValue('D'.$count, $row["email"]);
            $sheet->setCellValue('E'.$count, $row["phonenumber"]);
            $sheet->setCellValue('F'.$count, $row["title"]);
            $sheet->setCellValue('G'.$count, $row["company"]);
            $sheet->setCellValue('H'.$count, $row["address"]);
            $sheet->setCellValue('I'.$count, $row["active"]);
        }
    }
    $objWriter = new PHPExcel_Writer_Excel2007($objexcel);
    $filename = "Exportadmin.xlsx";
    $objWriter->save($filename);

    header('Content-Disposition: attachment; filename="' . $filename . '"');
    header('Content-Type: application/vnd.openxmlformatsofficedocument.spreadsheetml.sheet');
    header('Content-Length: ' . filesize($filename));
    header('Content-Transfer-Encodeing: binary');
    header('cache-Control: must-revalidate');
    header('Pragma: nocache');
    readfile($filename);
    mysqli_close($conn);
?>