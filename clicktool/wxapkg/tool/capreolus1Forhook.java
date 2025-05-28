package newpath;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.concurrent.*;

class capreolus1Forhook33 {
    public static int special = 0;
    public static StringBuilder result = new StringBuilder();
    public static StringBuilder result1 = new StringBuilder();
    public static HashSet<String> temp = new HashSet<>();
    public static List<String> patterns;     //批量处理时apk文件夹地址(放apk文件)
    public static short optimize = 0;
    public static boolean output = false;
    public static String outputpath = ".\\output\\";//注意这个路径后一定带\\ 不然输出路径地址错误

    public static void main(String[] args) throws IOException {
        main1("..\\files\\general");
    }

    public static void main1(String folderPath) {
        File folder = new File(folderPath);
        renameFiles(folder);
    }

    private static void renameFiles(File folder) {
        //System.out.println(folder);
        //System.out.println(folder.isDirectory());
        if (folder.isDirectory()) {
            File[] files = folder.listFiles();

            if (files != null) {
                for (File file : files) {
                    if (file.isDirectory()) {
                        renameFiles(file); // 递归处理子文件夹
                    } else {
                        if (file.getName().endsWith(".wxapkg")) {
                            String parentPath = file.getParentFile().getParentFile().getName();

                            //System.out.println("File path: " + file.getAbsolutePath());
                            reverseminiapp(parentPath, file.getAbsolutePath());
                        }
                    }
                }
            }
        }
    }

    private static String generateNewFileName(String parentPath) {
        String hexNumbers = parentPath.replaceAll("[^0-9A-Fa-f]", "");
        return "wx" + hexNumbers;
    }

    private static String generateRandomDigits() {
        Random rand = new Random();
        int randInt = rand.nextInt(900) + 100; // 生成三位随机数字
        return String.valueOf(randInt);
    }

    public static void reverseminiapp(String fileName, String path) {
        String fileNameWxid = fileName.replace(".wxapkg", "");

        try {
            //executeCommand(".\\exefiles\\pc_wxapkg_decrypt.exe", "-wxid", fileNameWxid, "-in", path, "-out", outputpath + fileNameWxid + ".wxapkg");
            //executeCommand("node.exe", ".\\exefiles\\WeChat\\wuWxapkg.js", "-s", outputpath + fileNameWxid + ".wxapkg");
            executeCommand("node.exe", ".\\exefiles\\WeChat\\wuWxapkg.js", "-s", path);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void executeCommand(String... command) throws IOException {
        boolean bdStatus = false;
        final ExecutorService exec = Executors.newFixedThreadPool(1);
        final Process[] temp1 = new Process[1];
        Callable<String> call = new Callable<String>() {
            public String call() throws Exception {
                try {
                    System.out.println(Arrays.toString(command));
                    ProcessBuilder processBuilder = new ProcessBuilder(command);
                    Process process = processBuilder.start();
                    String line = null;
                    temp1[0] = process;

                    BufferedReader in = new BufferedReader(new InputStreamReader(process.getInputStream()));
                    while ((line = in.readLine()) != null) {
                        System.out.println(line);
                    }
                    in.close();
                } catch (Exception e) // 流已经关闭异常
                {
                    e.printStackTrace();
                }
                return null;
            }
        };
        try {
            Future<String> future = exec.submit(call);
            // set db connection timeout to 10 seconds
            String obj = future.get(1000 * 10, TimeUnit.MILLISECONDS);
            bdStatus = Boolean.parseBoolean(obj);
            //System.out.println("the return value from call is :" + obj);
        } catch (TimeoutException ex) {
            System.out.println("====================task time out===============");
            temp1[0].destroy();
            ex.printStackTrace();
            bdStatus = false;
        } catch (Exception e) {
            System.out.println("failed to handle.");
            e.printStackTrace();
            bdStatus = false;
        }
        // close thread pool
        exec.shutdown();
    }
}